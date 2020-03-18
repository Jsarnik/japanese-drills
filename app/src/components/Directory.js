import React, {useState, useEffect} from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import TranslateIcon from '@material-ui/icons/Translate';
import GTranslateIcon from '@material-ui/icons/GTranslate';
import ListItemText from '@material-ui/core/ListItemText';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import { useDispatch } from "react-redux";
import * as cardActions from '../actions/cardActions';
import * as _ from 'lodash';

function Directory() {
    const dispatch = useDispatch();
    const cacheKeys = ['phrase', 'question', 'vocab', 'all','phrase-e', 'question-e', 'vocab-e', 'all-e'];
    const [directoryModel, setDirectoryModel] = useState({});

    useEffect(()=>{
        dispatch(cardActions.getCards()).then(res=>{
            let model = {};
            _.each(cacheKeys, key => {
                let s = key.split('-');
                let lessonsCompleted = JSON.parse(localStorage.getItem(key)) || [];
                model[key] = {
                    title: s.length > 1 ? `${s[0]}: ( English > Japanese )` : `${s[0]}: ( Japanese > English )`,
                    link: key.replace('-','/'),
                    completedCount:  lessonsCompleted.length,
                    cardCount: s[0] === 'all' ? Object.keys(res).length : _.filter(res, o=>{return o.type === s[0]}).length || 0,
                    icon: s.length > 1 ? <GTranslateIcon/> : <TranslateIcon/>
                }
            });
            setDirectoryModel(model);
        });
    },[]);
    
    function link(route){
        window.location.href = `/flashcards/${route}`;
    }

    return (
        <Card>
            <CardContent>
                <List>
                    {
                        _.map(directoryModel, dir => {
                            return (
                                <div key={dir.link}>
                                    <ListItem button onClick={()=>link(dir.link)}>
                                        <ListItemIcon>
                                           {dir.icon}
                                        </ListItemIcon>
                                        <ListItemText primary={dir.title}/>
                                        <span><span style={{color: '#3f51b5'}}>{dir.cardCount} </span> <span> / </span> <span style={{color: '#4caf50'}}> {dir.completedCount}</span></span>
                                    </ListItem>
                                    <Divider></Divider>
                                </div>
                            )
                        })
                    }
                </List>
            </CardContent>
        </Card>
    )
}

export default Directory;
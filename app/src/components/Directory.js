import React, {useState, useEffect} from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import FeedbackIcon from '@material-ui/icons/Feedback';
import ListItemText from '@material-ui/core/ListItemText';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import { useDispatch, useSelector } from "react-redux";
import * as cardActions from '../actions/cardActions';
import * as _ from 'lodash';

function Directory() {
    const data = useSelector(state => state.cards);
    const dispatch = useDispatch();
    const _all =  Object.keys(data).length || 0;
    const _phrase =  _.filter(data, o=>{return o.type === 'phrase'}).length || 0;
    const _question =  _.filter(data, o=>{return o.type === 'question'}).length || 0;
    const _vocab =  _.filter(data, o=>{return o.type === 'vocab'}).length || 0;

    useEffect(()=>{
        dispatch(cardActions.getCards());
    },[]);
    
    function link(route){
        window.location.href = `/flashcards/${route}`;
    }

    return (
        <Card>
            <CardContent>
                <List>
                    <ListItem button onClick={()=>link('phrase')}>
                        <ListItemIcon>
                            <FeedbackIcon/>
                        </ListItemIcon>
                        <ListItemText primary={'phrases ( japanese -> english )'}/>
                        {_phrase}
                    </ListItem>
                    <ListItem button onClick={()=>link('question')}>
                        <ListItemIcon>
                            <FeedbackIcon/>
                        </ListItemIcon>
                        <ListItemText primary={'questions ( japanese -> english )'}/>
                        {_question}
                    </ListItem>
                    <ListItem button onClick={()=>link('vocab')}>
                        <ListItemIcon>
                            <FeedbackIcon/>
                        </ListItemIcon>
                        <ListItemText primary={'vocab ( japanese -> english )'}/>
                        {_vocab}
                    </ListItem>
                    <ListItem button onClick={()=>link('all')}>
                        <ListItemIcon>
                            <FeedbackIcon/>
                        </ListItemIcon>
                        <ListItemText primary={'all ( japanese -> english )'}/>
                        {_all}
                    </ListItem>

                    <Divider></Divider>

                    <ListItem button onClick={()=>link('phrase/e')}>
                        <ListItemIcon>
                            <FeedbackIcon/>
                        </ListItemIcon>
                        <ListItemText primary={'phrases ( english -> japanese )'}/>
                        {_phrase}
                    </ListItem>
                    <ListItem button onClick={()=>link('question/e')}>
                        <ListItemIcon>
                            <FeedbackIcon/>
                        </ListItemIcon>
                        <ListItemText primary={'questions ( english -> japanese )'}/>
                        {_question}
                    </ListItem>
                    <ListItem button onClick={()=>link('vocab/e')}>
                        <ListItemIcon>
                            <FeedbackIcon/>
                        </ListItemIcon>
                        <ListItemText primary={'vocab ( english -> japanese )'}/>
                        {_vocab}
                    </ListItem>
                    <ListItem button onClick={()=>link('all/e')}>
                        <ListItemIcon>
                            <FeedbackIcon/>
                        </ListItemIcon>
                        <ListItemText primary={'all ( english -> japanese )'}/>
                        {_all}
                    </ListItem>
                </List>
            </CardContent>
        </Card>
    )
}

export default Directory;
import React, {useState, useEffect} from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import TranslateIcon from '@material-ui/icons/Translate';
import FeedbackIcon from '@material-ui/icons/Feedback';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Player from './Player';
import * as _ from 'lodash';

const defaultKeyShow = 'hiragana';
const BASE_URI = 'http://japanese-drills.s3.amazonaws.com/audio/';

function Phrases({data, isMobile}){
    return (
        <List>
            <Items data={data} isMobile={isMobile}></Items>
        </List>
    )
}

function Items({data, isMobile}){
    return data.map((item, i) => {
        return (
            <div key={i} className="phrase-container" style={{display: 'flex', justifyContent: 'space-between'}}>
                <div className="phrase">
                    <Phrase phrase={item} index={i} isMobile={isMobile}></Phrase>
                </div>
                <Divider light />
            </div>
        )
    });
}

function Phrase({phrase, index,isMobile}){
    const audioUrl = phrase.audioUrl ? phrase.audioUrl.indexOf('http') !== -1 ? phrase.audioUrl : `${BASE_URI}${phrase.audioUrl}` : null;
    return (
        <div className="phrase">
            <ListItem button className={'voice-button'}>
                <ListItemIcon>
                    <FeedbackIcon/>
                </ListItemIcon>
                <ListItemText primary={`${phrase[defaultKeyShow]}`}/>
                {
                    audioUrl && !isMobile ?
                        <Player url={audioUrl} controls={false}></Player>
                    :
                        null
                }
            </ListItem>
            {
                audioUrl && isMobile ?
                    <ListItem>
                        <Player url={audioUrl} controls={true}></Player>
                    </ListItem>
                :
                    null
            }
            <Translations values={phrase} index={index}></Translations>
        </div>
    )
}

function Translations({values, index}){
    const [selectedItem, setSelectedItem] = useState({index: -1, type: ''});

    return _.map(values, (val, key) => {
        if(key === 'english' || key === 'romaji'){
            let isSelected = selectedItem.index === index && selectedItem.type === key,
                selectModel = {index: index, type: key};

            return (
                <ListItem key={key} className={`${isSelected ? 'selected' : ''}`} button onClick={()=>{setSelectedItem(isSelected ? {} : selectModel)}}>
                    <ListItemIcon>
                        <TranslateIcon />
                    </ListItemIcon>
                    <ListItemText primary={`${isSelected ? val : key}`} />
                    {   
                        isSelected ?
                            <VisibilityIcon/>
                        :
                            <VisibilityOffIcon/>
                    }
                </ListItem>
            )
        }
    })
}

export default Phrases;

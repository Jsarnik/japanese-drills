import React, {useState, useEffect} from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import TranslateIcon from '@material-ui/icons/Translate';
import Divider from '@material-ui/core/Divider';
import Player from './Player';
import * as _ from 'lodash';

const defaultKeyShow = 'hiragana';
const BASE_URI = 'http://japanese-drills.s3.amazonaws.com/audio/';

function QuestionsAndAnswers({data, isMobile}){

    return (
        <List>
            <Items data={data} isMobile={isMobile}></Items>
        </List>
    )
}

function Items({data, isMobile}){
    return data.map((item, i) => {
        return (
            <div key={i} className="question-container" style={{display: 'flex', justifyContent: 'space-between'}}>
                    <Questions questions={item.question} index={i} isMobile={isMobile}></Questions>
                {
                    item.answer ? 
                        <Answers answers={item.answer} index={i} isMobile={isMobile}></Answers>
                    :
                        null
                }
                <Divider light />
            </div>
        )
    });
}

function Questions({questions, index, isMobile}){
    const audioUrl = questions.audio ? questions.audio.indexOf('http') !== -1 ? questions.audio : `${BASE_URI}${questions.audio}` : null;
    return (
        <div className="question">
            <ListItem button className={'voice-button'}>
                <ListItemIcon>
                    <HelpOutlineIcon/>
                </ListItemIcon>
                <ListItemText primary={`${questions[defaultKeyShow]}`}/>
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
            <Translations values={questions} index={index}></Translations>
        </div>
    )
}

function Answers({answers, index, isMobile}){
    const audioUrl = answers.audio ? answers.audio.indexOf('http') !== -1 ? answers.audio : `${BASE_URI}${answers.audio}` : null;
    return (
        <div className="answer">
            <ListItem button className={'voice-button'}>
                <ListItemIcon>
                    <QuestionAnswerIcon/>
                </ListItemIcon>
                <ListItemText primary={`${answers[defaultKeyShow]}`}/>
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
            <Translations values={answers} index={index}></Translations>
        </div>
    )
}

function Translations({values, index}){
    const [selectedItem, setSelectedItem] = useState({index: -1, type: ''});

    return _.map(values, (val, key) => {
        if(key !== 'katakana' && key !== defaultKeyShow && key !== 'audio'){
            let isSelected = selectedItem.index === index && selectedItem.type === key,
                selectModel = {index: index, type: key};

            return (
                <ListItem className={`${isSelected ? 'selected' : ''}`} button onClick={()=>{setSelectedItem(isSelected ? {} : selectModel)}}>
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

export default QuestionsAndAnswers;

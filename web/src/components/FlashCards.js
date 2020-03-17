import React, {useState, useEffect} from 'react';
import * as cardActions from '../actions/cardActions';
import {withRouter} from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Player from './Player';
import * as _ from 'lodash';
import { useDispatch, useSelector } from "react-redux";
import ReplayIcon from '@material-ui/icons/Replay';
import green from '@material-ui/core/colors/green';
import blue from '@material-ui/core/colors/blue';

const GreenButton = withStyles(theme => ({
    root: {
      color: green['A700'],
      backgroundColor: '#fff',
      '&:hover': {
        backgroundColor: green[50],
      },
    },
  }))(Button);

  const BlueButton = withStyles(theme => ({
    root: {
      color: blue['A700'],
      backgroundColor: '#fff',
      '&:hover': {
        backgroundColor: blue[50],
      },
    },
  }))(Button);

function ACard({card, isMobile}){
    const [isShowAnswer, setIsShowAnswer] = useState(false);
    const [isShowRomaji, setIsShowRomaji] = useState(false);
    const [isShowNoKanji, setIsShowNoKanji] = useState(false);

    useEffect(()=>{
        setIsShowAnswer(false);
        setIsShowRomaji(false);
        setIsShowNoKanji(false);
    }, [card])

    return (
        <div>
            {
                card.audioUrl ?
                    <Player url={card.audioUrl} controls={isMobile}></Player>
                :
                    null
            }
            <div className="study-text">{card.hiragana}</div>

            {
                isShowNoKanji ? 
                    <div className="hint-text">{card.no_kanji}</div>
                    :
                    <div>
                        <Button color="secondary" onClick={()=>setIsShowNoKanji(true)}>Show No Kanji</Button>
                    </div>
                    
            }

            {
                isShowRomaji ? 
                    <div className="romaji-text">{card.romaji}</div>
                    :
                    <div>
                        <BlueButton color="secondary" onClick={()=>setIsShowRomaji(true)}>Show Romaji</BlueButton> 
                    </div>
                    
            }

            {
                isShowAnswer ? 
                    <div className="answer-text">{card.english}</div>
                    :
                    <div>
                        <GreenButton color="primary" onClick={()=>setIsShowAnswer(true)}>Show Answer</GreenButton>
                    </div>
            }
        </div>
    )
}

function FlashCards(props){
    const data = useSelector(state => state.cards);
    const dispatch = useDispatch();
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const remaining = _.filter(data, o => {
        return !o.isLesson;
    });
    const finished = _.filter(data, o => {
        return o.isLesson;
    });

    useEffect(()=>{
        let type = props.match.params.lesson === 'all' ? null : props.match.params.lesson;
        dispatch(cardActions.getCards(type));
    },[]);

    function resetLesson(){
        dispatch(cardActions.resetLesson());
        setCurrentCardIndex(0);
    }

    function setNext(isRepeat){
        if(currentCardIndex+1 < remaining.length){
            if(!isRepeat){
                currentCard.isLesson = true;
                dispatch(cardActions.setCard(currentCard));
            }else{
                setCurrentCardIndex(currentCardIndex+1);
            }
        }else{
            setCurrentCardIndex(0);
        }
    }
    
    let currentCard = {...remaining[currentCardIndex]};

    return !_.isEmpty(currentCard) ? (
        <div style={{textAlign: 'center', width: '100%'}} className="card-container">
            {
                finished.length > 0 ?
                    <div>
                        <Button
                            variant="contained"
                            color="secondary"
                            startIcon={<ReplayIcon />}
                            onClick={resetLesson}
                        >
                            Reset Lesson
                        </Button>
                    </div>
                :
                    null
            }

            <div>{props.match.params.lesson.toUpperCase()}</div>
            <div style={{display: 'flex', justifyContent: 'space-evenly', marginBottom: '50px'}}>
                <div><span>{currentCardIndex+1}</span> / <span className="remaining">{remaining.length} </span> / <span className="finished">{finished.length}</span></div>
            </div>

            <Card>
                <CardContent>
                    <ACard card={currentCard} isMobile={props.isMobile}></ACard>
                </CardContent>
                <CardActions>
                    <div style={{display: 'flex', width: '100%', justifyContent: 'center'}}>
                        <div style={{marginRight: '5px'}}>
                            <Button variant="contained" color="primary" onClick={()=>setNext(false)}>
                                Good
                            </Button>
                        </div>
                        <div style={{marginLeft: '5px'}}>
                            <Button variant="contained" color="secondary" onClick={()=>setNext(true)}>
                                Revisit
                            </Button>
                        </div>
                    </div>
                </CardActions>
            </Card>
        </div>
    ) : <div style={{textAlign: 'center', width: '100%'}} className="card-container">No Cards</div>
}

export default withRouter(FlashCards);

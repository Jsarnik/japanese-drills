import React, {useState, useEffect} from 'react';
import useForm from "./useForm";
import validate from './useValidation';
import { useDispatch, useSelector } from "react-redux";
import * as cardActions from '../actions/cardActions';
import * as _ from 'lodash';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import FormLabel from '@material-ui/core/FormLabel';

function Form({card, submitFn, deleteCardFn}){
    const { errors, values, handleChange, handleSubmit, handleClearValues } = useForm(submit, validate, card);

    console.log(card)

    function submit(){
        submitFn(values).then(res=>{
            handleSubmitReset();
        }).catch(err =>{
            handleSubmitReset();
        });
    }

    function handleSubmitReset(){
        handleClearValues();
    }
    return (
        <form id="addCardForm" onSubmit={handleSubmit}>
            <Card style={{margin: "50px 0px"}} >
                <CardContent>
                    <div>
                        <FormLabel>type:</FormLabel>
                        <Select
                            labelId="Type"
                            id="type-select"
                            value={values.type || ''}
                            name="type"
                            onChange={handleChange}
                        >
                            <MenuItem value={'phrase'}>Phrase</MenuItem>
                            <MenuItem value={'question'}>Question</MenuItem>
                            <MenuItem value={'vocab'}>Vocab</MenuItem>
                        </Select>
                        {
                            errors.type ? 
                                <span>Required.</span>
                            :
                                null
                        }
                    </div>
                    <div>
                        <FormLabel>hiragana:</FormLabel>
                        <Input aria-label="hiragana" className={`${errors.hiragana ? 'error' : ''}`} type="text" placeholder="hiragana" name="hiragana" onChange={handleChange} value={values.hiragana || ''} />
                        {
                            errors.hiragana ? 
                                <span>Required.</span>
                            :
                                null
                        }
                    </div>

                    <div>
                        <FormLabel>no kanji:</FormLabel>
                        <Input aria-label="no_kanji" className="" type="text" placeholder="no_kanji" name="no_kanji" onChange={handleChange} value={values.no_kanji || ''} />
                        {
                            errors.no_kanji ? 
                                <span>Required.</span>
                            :
                                null
                        }
                    </div>

                    <div>
                        <FormLabel>romaji:</FormLabel>
                        <Input aria-label="romaji" className="" type="text" placeholder="romaji" name="romaji" onChange={handleChange} value={values.romaji || ''} />
                        {
                            errors.romaji ? 
                                <span>Required.</span>
                            :
                                null
                        }
                    </div>

                    <div>
                        <FormLabel>english:</FormLabel>
                        <Input aria-label="english" className={`${errors.english ? 'error' : ''}`} type="text" placeholder="english" name="english" onChange={handleChange} value={values.english || ''} />
                        {
                            errors.english ? 
                                <span>Required.</span>
                            :
                                null
                        }
                    </div>
              
                </CardContent>
                <CardActions>
                    <div style={{display: 'flex', justifyContent:'space-evenly', width: '100%'}}>
                        <div>
                            <Button
                                color="secondary"
                                startIcon={<DeleteIcon />}
                                onClick={()=>deleteCardFn(card)}
                            >
                                Delete
                            </Button>
                        </div>
                        <div>
                            <Button style={{float: 'right'}} color="primary" aria-label="submit" type="submit" htmltype="submit" className="submit-button">
                                Save
                            </Button>
                        </div>
                    </div>
                </CardActions>
            </Card>
        </form>
    )
}

function EditCards() {
    const data = useSelector(state => state.cards);
    const dispatch = useDispatch();
    const submitFn = (values) =>  dispatch(cardActions.updateCard(values));
    const deleteCardFn = (_card) =>  dispatch(cardActions.deleteCard(_card));

    useEffect(()=>{
        dispatch(cardActions.getCards());
    },[]);

    return data ? (
        <div>
        {
            _.map(data, (c, k) => {
                return (<Form card={{...c}} key={k} submitFn={submitFn} deleteCardFn={deleteCardFn}></Form>)
            })
        }
        </div>
    ) : null
}

export default EditCards;
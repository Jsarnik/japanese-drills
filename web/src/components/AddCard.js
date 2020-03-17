import React, {useState} from 'react';
import useForm from "./useForm";
import validate from './useValidation';
import { useDispatch } from "react-redux";
import * as cardActions from '../actions/cardActions';
import * as _ from 'lodash';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

function AddCard() {
    const { errors, values, handleChange, handleSubmit, handleClearValues } = useForm(submit, validate, {});
    const dispatch = useDispatch();

    const [isFormSubmit, setFormSubmit] = useState(false);

    function submit(){
        dispatch(cardActions.addCard(values)).then(res=>{
            handleSubmitReset();
        }).catch(err => {
            console.log(err);
        });

    }

    function handleSubmitReset(){
        setFormSubmit(true);
        handleClearValues();
    }

    return (
        <form id="addCardForm" onSubmit={handleSubmit} >
            <div>
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
                <Input aria-label="hiragana" className={`${errors.hiragana ? 'error' : ''}`} type="text" placeholder="hiragana" name="hiragana" onChange={handleChange} value={values.hiragana || ''} />
                {
                    errors.hiragana ? 
                        <span>Required.</span>
                    :
                        null
                }
            </div>

            <div>
                <Input aria-label="no_kanji" className="" type="text" placeholder="no_kanji" name="no_kanji" onChange={handleChange} value={values.no_kanji || ''} />
                {
                    errors.no_kanji ? 
                        <span>Required.</span>
                    :
                        null
                }
            </div>

            <div>
                <Input aria-label="romaji" className="" type="text" placeholder="romaji" name="romaji" onChange={handleChange} value={values.romaji || ''} />
                {
                    errors.romaji ? 
                        <span>Required.</span>
                    :
                        null
                }
            </div>

            <div>
                <Input aria-label="english" className={`${errors.english ? 'error' : ''}`} type="text" placeholder="english" name="english" onChange={handleChange} value={values.english || ''} />
                {
                    errors.english ? 
                        <span>Required.</span>
                    :
                        null
                }
            </div>

            <Button type="primary" color="primary" aria-label="submit" type="submit" htmltype="submit" className="submit-button">
                Save
            </Button>
        </form>
    )
}

export default AddCard;

import * as types from './actionTypes';
import config from '../globals';
import axios from 'axios';

export function getCardsSuccess(cards){
    return {type: types.GET_ALL_CARDS_SUCCESS, cards};
}

export function getCardsFailure(error){
    return {type: types.GET_ALL_CARDS_FAILURE, error};
}

export function getCards(_type){
    let url = `${config.baseApiUri}/api/getCards`;
    let options = {
        type: _type
    };
    return function(dispatch){
        return new Promise((resolve, reject)=>{
            axios.post(url, options)
            .then(res => {
                let _data = res.data;
                let dispatchFn = _data.failed ? getCardsFailure(_data.failed, _data) : getCardsSuccess(_data);
                dispatch(dispatchFn);
                resolve(_data);
            }).catch(e => {
                dispatch(getCardsFailure(e.message));
                reject(e.message);
            });
        });
    }
}

export function setCardSuccess(card){
    return {type: types.SET_CARD_SUCCESS, card};
}

export function setCardFailure(error){
    return {type: types.SET_CARD_FAILURE, error};
}

export function setCard(_card){
    let url = `${config.baseApiUri}/api/setCard`;
    let options = {
        card: _card
    };
    return function(dispatch){
        return new Promise((resolve, reject)=>{
            axios.post(url, options)
            .then(res => {
                let _data = res.data;
                let dispatchFn = _data.failed ? setCardFailure(_data.failed, _data) : setCardSuccess(_data);
                dispatch(dispatchFn);
                resolve(_data);
            }).catch(e => {
                dispatch(setCardFailure(e.message));
                reject(e.message);
            });
        });
    }
}

export function resetLessonSuccess(cards){
    return {type: types.GET_ALL_CARDS_SUCCESS, cards};
}

export function resetLessonFailure(error){
    return {type: types.GET_ALL_CARDS_FAILURE, error};
}

export function resetLesson(_card){
    let url = `${config.baseApiUri}/api/resetLesson`;
    return function(dispatch){
        return new Promise((resolve, reject)=>{
            axios.get(url, {})
            .then(res => {
                let _data = res.data;
                let dispatchFn = _data.failed ? resetLessonFailure(_data.failed, _data) : resetLessonSuccess(_data);
                dispatch(dispatchFn);
                resolve(_data);
            }).catch(e => {
                dispatch(resetLessonFailure(e.message));
                reject(e.message);
            });
        });
    }
}

export function addCardSuccess(card){
    return {type: types.SET_CARD_SUCCESS, card};
}

export function addCardFailure(error){
    return {type: types.SET_CARD_FAILURE, error};
}

export function addCard(_card){
    let url = `${config.baseApiUri}/api/addCard`;
    return function(dispatch){
        return new Promise((resolve, reject)=>{
            axios.post(url, {
                card: _card
            })
            .then(res => {
                let _data = res.data;
                let dispatchFn = _data.failed ? addCardFailure(_data.failed, _data) : addCardSuccess(_data);
                dispatch(dispatchFn);
                resolve(_data);
            }).catch(e => {
                dispatch(addCardFailure(e.message));
                reject(e.message);
            });
        });
    }
}

export function updateCardSuccess(card){
    return {type: types.SET_CARD_SUCCESS, card};
}

export function updateCardFailure(error){
    return {type: types.SET_CARD_FAILURE, error};
}

export function updateCard(_card){
    let url = `${config.baseApiUri}/api/updateCard`;
    return function(dispatch){
        return new Promise((resolve, reject)=>{
            axios.post(url, {
                card: _card
            })
            .then(res => {
                let _data = res.data;
                let dispatchFn = _data.failed ? updateCardFailure(_data.failed, _data) : updateCardSuccess(_data);
                dispatch(dispatchFn);
                resolve(_data);
            }).catch(e => {
                dispatch(updateCardFailure(e.message));
                reject(e.message);
            });
        });
    }
}

export function deleteCardSuccess(cards){
    return {type: types.GET_ALL_CARDS_SUCCESS, cards};
}

export function deleteCardFailure(error){
    return {type: types.GET_ALL_CARDS_FAILURE, error};
}

export function deleteCard(_card){
    let url = `${config.baseApiUri}/api/deleteCard`;
    return function(dispatch){
        return new Promise((resolve, reject)=>{
            axios.post(url, {
                card: _card
            })
            .then(res => {
                let _data = res.data;
                let dispatchFn = _data.failed ? deleteCardFailure(_data.failed, _data) : deleteCardSuccess(_data);
                dispatch(dispatchFn);
                resolve(_data);
            }).catch(e => {
                dispatch(deleteCardFailure(e.message));
                reject(e.message);
            });
        });
    }
}



export function setCachedLesson(key, values){
    return function(dispatch){
        localStorage.setItem(key, JSON.stringify(values));
    }
}

export function getCachedLesson(key){
    return function(dispatch){
        return localStorage.getItem(key);
    }
}
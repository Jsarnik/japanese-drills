import * as types from '../actions/actionTypes';
import * as _ from 'lodash';

const initialState =  {
    cards: {}
};

export default function adminReducer(state = initialState, action){
    switch(action.type){
        case types.GET_ALL_CARDS_SUCCESS:
            return action.cards;

        case types.SET_CARD_SUCCESS:
            return {
                ...state, [action.card._id]: action.card
            }

        case types.GET_ALL_CARDS_FAILURE:
            return state;

        default:
            return state;
    }
}
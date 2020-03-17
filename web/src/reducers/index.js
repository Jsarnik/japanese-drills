import { combineReducers } from 'redux';
import cards from './cardsReducer';

const appReducer = combineReducers({
    cards
});

// This is a catch all for logout = setting all stores back to initial state of the application;
const rootReducer = (state, action) => {
    return appReducer(state, action)
  }

export default rootReducer;
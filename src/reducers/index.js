import { combineReducers } from 'redux';
import showReducer from './showReducer';
import headerReducer from './headerReducer';

export default combineReducers ({
    shows: showReducer,
    header: headerReducer
})
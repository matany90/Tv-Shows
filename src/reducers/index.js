import { combineReducers } from 'redux';
import dataReducer from './dataReducer';
import headerReducer from './headerReducer';

export default combineReducers ({
    data: dataReducer,
    header: headerReducer
})
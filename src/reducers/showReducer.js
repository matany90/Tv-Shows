import { FETCH_SHOWS } from '../actions/types';

const INITIAL_STATE = []
export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case FETCH_SHOWS:
            return action.payload; 
        default:
         return state;
    }
}
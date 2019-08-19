import { FETCH_SHOWS, INCREASE_PAGE_NUMBER } from '../actions/types';

const INITIAL_STATE = { showsArray: [], page: 0 }
export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case FETCH_SHOWS:
            return {page: action.payload.page + 1 , showsArray: [...state.showsArray, ...action.payload.data] } ; 
        case INCREASE_PAGE_NUMBER: 
            return {...state, page: state.page + 1}    
        default:
         return state;
    }
}
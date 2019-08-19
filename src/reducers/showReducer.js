import { FETCH_SHOWS, FETCH_FILTER_SHOWS, INIT_PAGE_NUMBER } from '../actions/types';

const INITIAL_STATE = { showsArray: [], filterShows: [] }
export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case FETCH_SHOWS:
            return {...state, showsArray: [...state.showsArray, ...action.payload] } ; 
        case FETCH_FILTER_SHOWS:
            return {...state, filterShows: action.payload}
        case INIT_PAGE_NUMBER:
            return { ...state }    
        default:
         return state;
    }
}
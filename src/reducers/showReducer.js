import { FETCH_SHOWS, FETCH_FILTER_SHOWS, INIT_PAGE_NUMBER, /*TOGGLE_IS_FETCHING, CLEAR_DATA*/ } from '../actions/types';

const INITIAL_STATE = { showsArray: [], filterShows: []/*, isFetching: false*/ }
export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case FETCH_SHOWS:
            return {...state, showsArray: [...state.showsArray, ...action.payload] } ; 
        case FETCH_FILTER_SHOWS:
            return {...state, filterShows: action.payload}
        case INIT_PAGE_NUMBER:
            return { ...state }  
        /*case TOGGLE_IS_FETCHING: 
            return {...state, isFetching: action.payload}    
        case CLEAR_DATA:
            return {...state, showsArray: [], filterShows: [], isFetching:true}     */  
        default:
         return state;
    }
}
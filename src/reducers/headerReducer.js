import { SEARCH_ICON_CLICKED } from '../actions/types';

const INITIAL_STATE = { showSearchBar: false }
export default (state = INITIAL_STATE, action) => {
    console.log('test')
    switch(action.type) {
        case SEARCH_ICON_CLICKED:
            return {...state, showSearchBar: !state.showSearchBar }; 
        default:
         return state;
    }
}
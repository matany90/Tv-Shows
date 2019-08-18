import { SEARCH_ICON_CLICKED, SEARCH_BAR_TEXT_CHANGED } from '../actions/types';

const INITIAL_STATE = { showSearchBar: false, searchBarText: '' }
export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case SEARCH_ICON_CLICKED:
            return {...state, showSearchBar: !state.showSearchBar, searchBarText: '' }; 
        case SEARCH_BAR_TEXT_CHANGED:
            return {...state, searchBarText: action.payload}    
        default:
         return state;
    }
}
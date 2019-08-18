import { SEARCH_ICON_CLICKED, SEARCH_BAR_TEXT_CHANGED } from './types';

export const onSearchIconClick = () => {
    return { type: SEARCH_ICON_CLICKED, payload: true };
}

export const onSearchBarTextChange = (text) => {
    return { type: SEARCH_BAR_TEXT_CHANGED, payload: text };
}
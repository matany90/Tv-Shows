import { SEARCH_ICON_CLICKED } from './types';

export const onSearchIconClick = () => {
    return { type: SEARCH_ICON_CLICKED, payload: true };
}
import { FETCH_SHOWS, FETCH_FILTER_SHOWS, INIT_PAGE_NUMBER,/*TOGGLE_IS_FETCHING, CLEAR_DATA*/ } from './types';
import axios from 'axios';

let PAGE = 0

export const fetchShows = () => async dispatch => {
    const res = await axios.get(`http://api.tvmaze.com/shows?page=${PAGE}`);
    console.log(PAGE)
    PAGE = PAGE + 1

    dispatch({ type: FETCH_SHOWS, payload: res.data });
}

export const fetchFilterShows = (text)  => async dispatch => {
    const res = await axios.get(`http://api.tvmaze.com/search/shows?q=${text}`);

    dispatch({ type: FETCH_FILTER_SHOWS, payload: res.data.map(item => item.show)})
}

export const initPageNumber = () => {
    PAGE = 0;
    return {type: INIT_PAGE_NUMBER };
} 

/*export const toggleIsFetching = (bool) => {
    return { type: TOGGLE_IS_FETCHING, payload: bool }
}

export const clearData = () => {
    return { type: CLEAR_DATA }
} */

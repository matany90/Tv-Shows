import { FETCH_SHOWS, INCREASE_PAGE_NUMBER } from './types';
import axios from 'axios';

export const fetchShows = (page) => async dispatch => {
    const res = await axios.get(`http://api.tvmaze.com/shows?page=${page}`);

    dispatch({ type: FETCH_SHOWS, payload: {data: res.data, page} });
}

export const increasePageNumber = () => {
    return { type: INCREASE_PAGE_NUMBER }
}


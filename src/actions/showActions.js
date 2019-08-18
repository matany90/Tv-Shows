import { FETCH_SHOWS } from './types';
import axios from 'axios';

export const fetchShows = () => async dispatch => {
    const shows = await axios.get('http://api.tvmaze.com/shows');
    console.log(shows.data)
    dispatch({ type: FETCH_SHOWS, payload: shows.data });
}


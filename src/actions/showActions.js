import { FETCH_SHOWS } from './types';

export const fetchShows = () => {
    const shows = {
        id: "1",
    }
    return {type: FETCH_SHOWS, payload: shows}
}
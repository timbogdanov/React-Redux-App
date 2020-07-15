import axios from 'axios';

export const FETCHING_JOKE_START = 'FETCHING_JOKE_START';
export const FETCHING_JOKE_SUCCESS = 'FETCHING_JOKE_SUCCESS';
export const FETCHING_JOKE_FAILURE = 'FETCHING_JOKE_FAILURE';

export const fetchJoke = () => {
  return (dispatch) => {
    dispatch({ type: FETCHING_JOKE_START });
  };
};

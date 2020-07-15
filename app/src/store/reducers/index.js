import * as ACTIONS from '../actions';

const initalState = {
  isLoading: false,
  joke: {},
  error: '',
};

export const reducer = (state = initalState, action) => {
  switch (action.type) {
    case ACTIONS.FETCHING_JOKE_START:
      return {
        ...state,
        isLoading: true,
      };
    case ACTIONS.FETCHING_JOKE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        joke: action.payload,
        error: '',
      };
    case ACTIONS.FETCHING_JOKE_FAILURE:
      return {
        ...state,
        isLoading: false,
        joke: {},
        error: action.payload,
      };
    default:
      return state;
  }
};

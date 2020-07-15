import * as ACTIONS from '../actions';

const initalState = {
  isLoading: false,
  joke: [],
  error: '',
};

export const reducer = (state = initalState, action) => {
  switch (action.type) {
    case ACTIONS.FETCHING_JOKE_START:
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
};

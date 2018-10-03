import { FETCH_POSTS_REQUEST, FETCH_POSTS_SUCCESS } from './actionTypes';

const initialState = {
  isLoading: false,
  posts: [],
};

export const reducer = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case FETCH_POSTS_REQUEST: {
      return {
        ...state,
        isLoading: true,
      }
    }
    case FETCH_POSTS_SUCCESS: {
      const { payload } = action;
      return {
        ...state,
        isLoading: true,
        posts: payload
      }
    }
    default:
      return state;
  }
}
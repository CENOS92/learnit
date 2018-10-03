import { FETCH_POSTDETAIL_REQUEST, FETCH_POSTDETAIL_SUCCESS } from './actionTypes';

const initialState = {
  post: [],
  comments: [],
};

export const reducer = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case FETCH_POSTDETAIL_REQUEST: {
      return {
        ...state,
        post: [],
        comments: [],
      }
    }
    case FETCH_POSTDETAIL_SUCCESS: {
      const { payload } = action;
      const { post, comments } = payload;
      return {
        ...state,
        post,
        comments,
      }
    }
    default:
      return state;
  }
};
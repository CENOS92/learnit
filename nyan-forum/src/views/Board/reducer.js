import { FETCH_BOARDS_REQUEST, FETCH_BOARDS_SUCCESS } from './actionTypes';

const initialState = {
  isLoading: false,
  boards: [],
};


export const reducer = (state = initialState, action) => {
  console.log('이거슨 board의 reducer이다. state와 action이 궁금하지?', state, action);
  const { type } = action; // action은 객체!
  
  switch (type) {
    case FETCH_BOARDS_REQUEST: {
      return {
        ...state,
        isLoading: true,
      }
    }
    case FETCH_BOARDS_SUCCESS: {
      const { payload } = action;
      return {
        ...state,
        isLoading: false,
        boards: payload,
      }
    }
    default:
      return state;
  }
}

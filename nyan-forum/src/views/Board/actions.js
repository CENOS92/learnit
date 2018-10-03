import { FETCH_BOARDS_REQUEST, FETCH_BOARDS_SUCCESS } from './actionTypes';
import { db } from '../../firebase';

/** Action Creators */
const fetchBoardsRequest = () => {
  return {
    type: FETCH_BOARDS_REQUEST,
  }
}

const fetchBoardsSuccess = (payload) => {
  return {
    type: FETCH_BOARDS_SUCCESS,
    payload,
  }
}

/** Bound Action Creator? */
export const fetchBoards = () => {
  return async (dispatch) => {
    console.log('자 이제, fetchBoardsRequest를 dispatch 해보지')
    dispatch(fetchBoardsRequest());
    const boardSnapshot = await db.collection('boards').get();
    const boards = boardSnapshot.docs.map((snapshot) => {
      return snapshot.data();
    });
    console.log('자 이제, fetchBoardsSuccess를 dispatch 해보지')
    dispatch(fetchBoardsSuccess(boards));
  }
}
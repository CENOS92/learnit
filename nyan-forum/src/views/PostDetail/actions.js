import { FETCH_POSTDETAIL_REQUEST, FETCH_POSTDETAIL_SUCCESS } from './actionTypes';
import { db } from '../../firebase';


const fetchPostDetailRequest = () => {
  return {
    type: FETCH_POSTDETAIL_REQUEST,
  }
}

const fetchPostDetailSuccess = (payload) => {
  return {
    type: FETCH_POSTDETAIL_SUCCESS,
    payload
  }
}

export const fetchPostDetail = (postId) => {
  return async (dispatch) => {
    dispatch(fetchPostDetailRequest());
    const postSnapshot = await db.collection('posts').doc(postId).get();
    const post = postSnapshot.data();

    const commentsPromises = post.comments.map(async (commentId) => {
      const commentSnapshot = await db.collection('comments').doc(commentId).get();
      return commentSnapshot.data();
    });
    
    const comments = await Promise.all(commentsPromises)
    dispatch(fetchPostDetailSuccess({post, comments}));
  }
}
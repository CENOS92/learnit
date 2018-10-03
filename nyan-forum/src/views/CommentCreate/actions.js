import { db } from '../../firebase';

export const createComment = (data) => {
  return async (dispatch) => {
    const { author, content, postId } = data;
    // 새로운 댓글을 Comments Collection에 추가
    const newCommentRef = db.collection('comments').doc();
    await newCommentRef.set({
      id: newCommentRef.id,
      author,
      content
    });

    // 새로 생성된 코멘트의 Id를 Post Collection의 comments에 추가
    const postSnapshot = await db.collection('posts').doc(postId).get();
    const commentsByPost = postSnapshot.data().comments;
    await db.collection('posts').doc(postId).update({
      comments: [
        ...commentsByPost,
        newCommentRef.id
      ]
    })
  }
}
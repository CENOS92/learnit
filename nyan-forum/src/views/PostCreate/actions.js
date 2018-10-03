import { db } from '../../firebase';

export const createPost = (data) => {
  return async (dispatch) => {
    const newPostRef = db.collection('posts').doc();
    const { author, title, content, boardId } = data;  
    // document 생성
    await newPostRef.set({
      id: newPostRef.id,
      author,
      title,
      content,
      comments: []
    })

    // board의 posts 갱신 (board doc update)
    const boardSnapshot = await db.collection('boards').doc(boardId).get();
    const postsByBoard = boardSnapshot.data().posts;
    await db.collection('boards').doc(boardId).update({
      posts: [
        ...postsByBoard,
        newPostRef.id
      ]
    });
  }
}
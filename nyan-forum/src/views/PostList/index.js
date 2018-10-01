import React from 'react';
import { db } from '../../firebase';

import PostItem from '../../components/PostItem';

class PostList extends React.Component {
  state = {
    posts: [],
  }

  async componentDidMount () {
    const boardId = this.props.match.params.boardId;
    const boardSnapshot = await db.collection('boards').doc(boardId).get();
    const board = boardSnapshot.data();
    console.log(board)
    const postPromises = board.posts.map(async (postId) => {
      const postSnapshot = await db.collection('posts').doc(postId).get();
      return postSnapshot.data()
    })
    const posts = await Promise.all(postPromises);
    this.setState({ posts });
  }

  render() {
    const { posts } = this.state;
    return (
      <div>
        {
          posts.map((post) => {
            return (
              <PostItem key={post.id} post={post} />
            );
          })
        }
      </div>
    );
  }
}

export default PostList;
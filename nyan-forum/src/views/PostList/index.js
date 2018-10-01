import React from 'react';
import styled from 'styled-components';
import { db } from '../../firebase';

import PostItem from '../../components/PostItem';

class PostList extends React.Component {
  state = {
    posts: [],
  }

  async componentDidMount () {
    const boardId = this.props.match.params.boardId;
    console.log(boardId);
    const boardSnapshot = await db.collection('boards').doc(boardId).get();
    const board = boardSnapshot.data();
    console.log("board", board)
    const postPromises = board.posts.map(async (postId) => {
      const postSnapshot = await db.collection('posts').doc(postId).get();
      return postSnapshot.data()
    })
    const posts = await Promise.all(postPromises);
    this.setState({ posts });
  }

  render() {
    const boardId = this.props.match.params.boardId;
    const { posts } = this.state;
    return (
      <Wrapper>
        {boardId}
        { 
          posts.map((post) => {
            return (
              <PostItem key={post.id} post={post} />
            );
          })
        }
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  width: 100%;
`;

export default PostList;
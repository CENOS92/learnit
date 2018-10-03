import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { db } from '../../firebase';

import PostItem from '../../components/PostItem';
import { fetchPosts } from './actions';

class PostList extends React.Component {

  async componentDidMount () {
    const boardId = this.props.match.params.boardId;
    const { dispatch } = this.props; 
    dispatch(fetchPosts(boardId));
  }

  async componentDidUpdate (prevProps, prevState) {
    const { dispatch, match } = this.props;
    if (prevProps.match.params.boardId !== match.params.boardId) {
      const { boardId } = match.params;
      dispatch(fetchPosts(boardId));
    }
  }

  render() {
    const { posts } = this.props;
    return (
      <Wrapper>
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

const mapStateToProps = (state) => {
  return {
    isLoading: state.post.isLoading,
    posts: state.post.posts,
  }
}

export default connect(mapStateToProps)(PostList);
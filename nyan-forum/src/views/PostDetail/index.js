import React from 'react';
import styled from 'styled-components';
import { db } from '../../firebase';

import PostItem from '../../components/PostItem';
// import Comments from '../../components/Comments';

class PostDetail extends React.Component {
  
  state = {
    post: {},
    comments: [],
  }

  async componentDidMount () {
    const { postId } = this.props.match.params;
    console.log(postId);
  }

  render() {
    return (
      <div>
        postDetail
      </div>
    );
  }
}

export default PostDetail;
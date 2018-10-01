import React, { Component } from 'react';

class PostItem extends Component {
  render() {
    const { post } = this.props;
    console.log(post)
    return (
      JSON.stringify(post)
    );
  }
}

export default PostItem;
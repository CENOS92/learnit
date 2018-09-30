import React from 'react';

class PostList extends React.Component {
  render() {
    const boardId = this.props.match.params.boardId;
    console.log("boardId", boardId)
    return (
      <div>PostList</div>
    );
  }
}

export default PostList;
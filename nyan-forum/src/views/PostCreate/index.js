import React from 'react';
import { db } from '../../firebase'

class PostCreate extends React.Component {
  
  async componentDidMount() {
    const { boardId } = this.props.match.params;
    const docSnapshpt = await db.collection('boards').doc(boardId).get();
    const board  = docSnapshpt.data();
    console.log(board)

  }

  render() {
    const { boardId } = this.props.match.params;
    console.log("boardId", boardId)
    return (
      <div>PostCreate</div>
    );
  }
}

export default PostCreate;
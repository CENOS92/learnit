import React from 'react';
import { db } from '../../firebase'

class PostCreate extends React.Component {
  state = {
    author: '',
    title: '',
    content: ''
  };


  async componentDidMount() {
    const { boardId } = this.props.match.params;
    const docSnapshpt = await db.collection('boards').doc(boardId).get();
    const board  = docSnapshpt.data();
    console.log(board)
  }

  render() {
    const { boardId } = this.props.match.params;
    console.log("boardId", boardId)
    const { author, title, content } = this.state;
    return (
      <div>
        <form action="">
          <div>
            <label>닉네임</label>
            <input value={author} onChange={this.onChange} />
          </div>
          <div>
            <label>제목</label>
            <input value={title} onChange={this.onChange} />
          </div>
          <div>
            <label>내용</label>
            <input value={content} onChange={this.onChange} />
          </div>
          <button>글 쓰기</button>
        </form>
      </div>
    );
  }
}

export default PostCreate;
import React from 'react';
import styled from 'styled-components';
import { db } from '../../firebase'

class PostCreate extends React.Component {
  state = {
    author: '',
    title: '',
    content: ''
  };

  handleChange = (type) => (evt) => {
    this.setState({
      [type] : evt.target.value
    })
  }

  handleSubmit = async (evt) => {
    evt.preventDefault();
    const confirm = window.confirm('정말로 등록하시겠습니까?');

    if (confirm) {
      const { boardId } = this.props.match.params;
      const { author, title, content } = this.state;
      const newPostRef = db.collection('posts').doc();

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
      console.log('boardSnapshot', boardSnapshot)
      const postsByBoard = boardSnapshot.data().posts;
      await db.collection('boards').doc(boardId).update({
        posts: [
          ...postsByBoard,
          newPostRef.id
        ]
      });

      alert('성공적으로 등록했습니다')
      this.props.history.goBack();
    }
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
            <input value={author} onChange={this.handleChange('author')} />
          </div>
          <div>
            <label>제목</label>
            <input value={title} onChange={this.handleChange('title')} />
          </div>
          <div>
            <label>내용</label>
            <input value={content} onChange={this.handleChange('content')} />
          </div>
          <button onClick={this.handleSubmit}>글 쓰기</button>
        </form>
      </div>
    );
  }
}

export default PostCreate;
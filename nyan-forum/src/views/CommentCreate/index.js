import React, { Component } from 'react';
import styled from 'styled-components';
import { db } from '../../firebase';

import Button from '../../components/Button'

class CommentCreate extends Component {
  state = {
    author: '',
    content: ''
  }

  handleChange = (type) => (evt) => {
    this.setState({
      [type]: evt.target.value,
    })
  }

  handleSubmit = async (evt) => {
    evt.preventDefault();
    const confirm = window.confirm('정말로 등록하시겠습니까?');

    if (confirm) {
      const { postId } = this.props.match.params;
      const { author, content } = this.state;

      // 새로운 댓글을 Comments Collection에 추가
      const newCommentRef = db.collection('comments').doc();
      await newCommentRef.set({
        id: newCommentRef.id,
        author,
        content
      });

      // 새로 생성된 코멘트의 Id를 Post Collection의 comments에 추가
      const postSnapshot = await db.collection('posts').doc(postId).get();
      const commentsByPost = postSnapshot.data().comments;
      await db.collection('posts').doc(postId).update({
        comments: [
          ...commentsByPost,
          newCommentRef.id
        ]
      })

      alert('성공적으로 등록되었습니다.');
      this.props.history.goBack();
    }
  }
  
  render() {
    const { author, content } = this.state;
    return (
      <div>
        <form>
          <div>
            <label>닉네임</label>
            <input value={author} onChange={this.handleChange('author')} />
          </div>
          <div>
            <label>내용</label>
            <input value={content} onChange={this.handleChange('content')} />
          </div>
          <Button onClick={this.handleSubmit}>댓글 쓰기</Button>
        </form>
      </div>
    );
  }
}

export default CommentCreate;
import React, { Component } from 'react';
import styled from 'styled-components';

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
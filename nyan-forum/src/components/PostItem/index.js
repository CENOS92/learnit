import React, { Component } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom'

class PostItem extends Component {  

  render() {
    const { post, isDetail } = this.props;
    console.log('isDetail', isDetail);
    const { id, author, title, content, comments } = post;
    console.log(post)
    return (
      <Wrapper>
        <Author>
          <span>{author}</span>
        </Author>
        <Title>
          <span>{title}</span>
        </Title>
        <Content>
          <span>{content}</span>
        </Content>
        {
          isDetail? null : (
            <CommentCount>
              <span>댓글 {comments.length}</span>
            </CommentCount>
          )
        }
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  background-color: #fff;
  border: 1px solid #eee;
  border-radius: 3px;
  padding: 3rem;
  width: 100%;
  margin-bottom: 2rem;
  cursor: ${(props) => props.isDetail ? 'initial' : 'pointer'};
`;

const Author = styled.div`
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 0.7rem;
  color: #333;
`;

const Title = styled.div`
  font-size: 1.8rem;
  font-weight: 800;
  margin-bottom: 2rem;
  color: #333;
`;

const Content = styled.div`
  font-size: 1.6rem;
  font-weight: 400;
  color: #333;
`;

const CommentCount = styled.div`
  margin-top: 2rem;
  font-size: 1.4rem;
  font-weight: 400;
  color: #999;
`;

export default PostItem;
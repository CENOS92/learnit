import React from 'react';
import styled from 'styled-components';

class Comments extends React.Component {
  render() {
    const { comments } = this.props;
    return (
      <Wrapper>
        <div>
          <span>댓글 {comments.length} 개</span>
        </div>
        {
          comments.map(({id, author, content}) => {
            return (
              <div key ={id}>
                {author}
                <span>{content}</span>
              </div>
            );
          }) 
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
`;



export default Comments;
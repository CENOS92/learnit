import React from 'react';
import styled from 'styled-components';
import {
  withRouter,
  Link,
} from 'react-router-dom';

class Header extends React.Component {
  render() {
    const { pathname } = this.props.location;
    console.log("Header pathname", pathname)
    const postId = pathname.split('/')[3];
    const { isCreate } = pathname.includes('/create');
    
    return (
      <div>
        <div>
          <span>냥포럼</span>
        </div>
        <div>
          {
            isCreate ? null : (
              <span>{ postId ? '댓글쓰기' : '글쓰기' }</span>
            )
          }
        </div>
      </div>
    );
  }
}

const Wrapper = styled.div`
  max-width: 1004px;
  margin: 0 auto;
  padding: 5rem 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;


export default withRouter(Header); // withRouter 없으면 pathname을 가지고 올 수 없음
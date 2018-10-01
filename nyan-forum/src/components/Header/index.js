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
    const { postId } = pathname.split('/')[3];
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

export default withRouter(Header);
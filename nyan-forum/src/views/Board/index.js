import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import {
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import Header from '../../components/Header';
import Navbar from '../../components/Navbar'
import PostList from '../PostList';
import PostCreate from '../PostCreate';
import PostDetail from '../PostDetail';
import CommentCreate from '../CommentCreate';

import { fetchBoards } from './actions';

class Board extends React.Component {
  
  async componentDidMount () {
    const { dispatch } = this.props;
    dispatch(fetchBoards());
  }

  render() {
    const { match, boards } = this.props;
    console.log("Board Component에서 props로 받은 boards", boards);
    return (
      <div>
        <Header />
        <Contents>
          <Navbar boards={boards} />
            <Switch>
              <Route path={`${match.url}/:boardId`} exact component={PostList} />
              <Route path={`${match.url}/:boardId/create`} exact component={PostCreate} />
              <Route path={`${match.url}/:boardId/:postId`} exact component={PostDetail} />
              <Route path={`${match.url}/:boardId/:postId/create`} exact component={CommentCreate} />
            </Switch>
        </Contents>
      </div>
    );
  }
}

const Contents = styled.div`
  max-width: 1004px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
`;

const mapStateToProps = (state) => {
  console.log("이거슨 mapStateToProps야. 이렇게 하면 Redux와 연결해서 props에서 boards를 받아올수있어. 이 state를 가지고 있어",state);
  return {
    boards: state.board.boards
  }
}

export default connect(mapStateToProps)(Board);
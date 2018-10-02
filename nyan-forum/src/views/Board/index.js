import React from 'react';
import styled from 'styled-components';
import {
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import { db } from '../../firebase';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar'
import PostList from '../PostList';
import PostCreate from '../PostCreate';
import PostDetail from '../PostDetail';
import CommentCreate from '../CommentCreate';

class Board extends React.Component {
  state = {
    boards: [],
  }

  async componentDidMount () {
    const boardsSnapshot = await db.collection('boards').get();
    const boards = boardsSnapshot.docs.map((snapshot) => {
      return snapshot.data();
    });
    
    const activeBoardId = boards[0].id;
    this.setState({
      boards,
    }, () => { // callback
      this.props.history.push(`/board/${activeBoardId}`)
    });
    
    
  }

  render() {
    const { match } = this.props;
    console.log('match.url', match.url);
    const { boards } = this.state;
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

export default Board;
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

class Board extends React.Component {
  state = {
    boards: [],
  }

  async componentDidMount () {
    const boards = await db.collection('boards').get();
    const boardsData = boards.docs.map((snapshot) => {
      return snapshot.data();
    });
    console.log(boardsData)
    this.setState({
      boards: boardsData
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
              {/* <Route path="/board/:boardId" exact component={PostList} /> */}
              <Route path="/board/:boardId/create" exact component={PostCreate} />
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
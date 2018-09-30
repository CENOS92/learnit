import React from 'react';
import {
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import { db } from '../../firebase';

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

    this.setState({
      boards: boardsData
    });
  }

  render() {
    const { boards } = this.state;
    return (
      <div>
        <ul>
          {
            boards.map((board) => {
              const {id, name } = board;
              return (
                <Link to={`/board/${id}`} key={id}>
                  <li>{name}</li>
                </Link>
              )
            })
          }
        </ul>
        <div>
          <Switch>
            <Route path="/board/:boardId" exact component={PostList} />
            <Route path="/board/:boardId/create" component={PostCreate} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Board;
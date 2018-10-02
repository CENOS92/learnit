import React from 'react';
import {
  BrowserRouter, // Routing 최상단에 있는 컴포넌트 (앱의 최 상단)
  Switch,
  Route,
} from 'react-router-dom';

import Landing from '../Landing';
import Board from '../Board';

/**
 * container component (UI 뿐 아니라 로직을 가진 컴포넌트)는 views에
 * UI만 가지고 있는 컴포넌트 components에
 */
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          {/* exact는 포함되었더라도 정확히 일치하는 것만! 가장 상위에는 exact를 사용해야 함 `exact={true}` */}
          <Route path="/" exact component={Landing} />
          <Route path="/board" component={Board} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
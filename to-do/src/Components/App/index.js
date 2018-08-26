import React from 'react';
import Todo from '../Todo/'

class App extends React.Component {
  render () {
    return (
      <div>
        <h1>To-do List!</h1>
        <Todo />
      </div>
      
    )
  }
}

export default App;
import React, { Component } from 'react';
import './index.css'
import Header from '../Header'
import Note from '../Note'
import List from '../List'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [
        {id: '_asdf3das',
         title: '제목1',
         contents: '내용1'},
        {id: '_afef2asd',
         title: '제목2',
         contents: '내용2'},
        {id: '_bewe1efv',
         title: '제목3',
         contents: '내용3'}
      ],
      activeId: '_asdf3das',
    };
  }
  render() {
    const {notes, activeId} = this.state;
    return (
      <div className="app">
        <Header />
        <div className="container">
          <List notes={notes} activeId={activeId}/>
          <Note />
        </div>
      </div>
    );
  }
}

export default App;
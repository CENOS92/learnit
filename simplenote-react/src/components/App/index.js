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
  handleListItemClick = (id) => {
    this.setState({
      activeId: id
    })
  }
  render() {
    const {notes, activeId} = this.state;
    const activeNote = notes.filter((item) => item.id === activeId)[0];
    return (
      <div className="app">
        <Header />
        <div className="container">
          <List 
            notes={notes} 
            activeId={activeId}
            onListItemClick={this.handleListItemClick}/>
          {notes.length !== 0 && <Note note={activeNote}/>}
        </div>
      </div>
    );
  }
}

export default App;
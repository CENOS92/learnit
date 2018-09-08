import React, { Component } from 'react';
import './index.css'
import Header from '../Header'
import Note from '../Note'
import List from '../List'
import { generateId } from '../../utils';


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

  hanleEditNote = (type, e) => {
    const notes = [...this.state.notes];
    // Error occured with {} : notes.find((item) => {item.id === this.state.activeId})
    const note = notes.find((item) => item.id === this.state.activeId)
    note[type] = e.target.value;
    this.setState({
      notes,
    })
  }

  handleAddNote = () => {
    const id = generateId();
    this.setState({
      notes: [
        ...this.state.notes,
        {
          id,
          title: '제목',
          contents: '내용',
        }
      ], 
      activeId: id,
    });
  }

  handleDeleteNote = () => {
    const notes = this.state.notes.filter((item) => item.id !== this.state.activeId);
    this.setState({
      notes,
      activeId: notes.lenth !== 0 ? notes[0].id : null,  
    })
  }

  render() {
    const {notes, activeId} = this.state;
    const activeNote = notes.filter((item) => item.id === activeId)[0];
    return (
      <div className="app">
        <Header 
          onAddNote={this.handleAddNote}
          onDeleteNote={this.handleDeleteNote}/>
        <div className="container">
          <List 
            notes={notes} 
            activeId={activeId}
            onListItemClick={this.handleListItemClick}/>
          {
            notes.length !== 0 && 
              <Note note={activeNote}
                    onEditNote={this.hanleEditNote}/>}
        </div>
      </div>
    );
  }
}

export default App;
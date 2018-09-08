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
         title: '심플노트에 오신것을 환영합니다!',
         contents: '차근차근 만들면서 리액트를 익혀보세요! 👻\n\n헤더의 추가 버튼을 클릭하여 새로운 노트를 만드실 수 있습니다.'},
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
      activeId: notes.length !== 0 ? notes[0].id : null,  
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
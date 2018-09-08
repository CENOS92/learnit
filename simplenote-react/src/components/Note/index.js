import React, { Component } from 'react';
import './index.css'

class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <div className="note">
        <input className="title" />
        <textarea className="note-contents"></textarea>
      </div>
    );
  }
}

export default Note;

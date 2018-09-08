import React, { Component } from 'react';
import './index.css'

class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    const {title, contents} = this.props.note;
    return (
      <div className="note">
        <input className="title" value={title}/>
        <textarea 
          className="note-contents"
          value={contents} />
      </div>
    );
  }
}

export default Note;

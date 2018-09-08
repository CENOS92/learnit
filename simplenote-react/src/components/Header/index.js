import React, { Component } from 'react';
import './index.css'

class Header extends Component {
  render() {
    const {onAddNote, onDeleteNote} = this.props;
    return (
      <div className="header">
        <div className="title">
          <span>Bom's Simple Note</span>
        </div>
        <div className="buttons">
          <button
            onClick={onAddNote}>추가</button>
          <button
            onClick={onDeleteNote}>삭제</button>
        </div>
      </div>
    );
  }
}

export default Header;

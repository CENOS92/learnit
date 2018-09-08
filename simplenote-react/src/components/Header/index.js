import React, { Component } from 'react';
import './index.css'
import logo from '../../logo.jpeg';

class Header extends Component {
  render() {
    const {onAddNote, onDeleteNote} = this.props;
    return (
      <div className="header">
        <div className="title">
          <a 
            href="https://github.com/CENOS92/learnit/tree/master/simplenote-react"
            target="_balnk">
            <img className="logo" src={logo}/></a>
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

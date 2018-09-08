import React, { Component } from 'react';
import './index.css'

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="title">
          <span>Bom's Simple Note</span>
        </div>
        <div className="buttons">
          <button>추가</button>
          <button>삭제</button>
        </div>
      </div>
    );
  }
}

export default Header;

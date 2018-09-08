import React, { Component } from 'react';
import './index.css'
import ListItem from '../ListItem'

class List extends Component {
  render() {
    const {notes, activeId} = this.props;
    return (
      <div className="list">
        {notes.map((item) => {
          const {id, title, contents} = item;
          return (
            <ListItem 
              key={id}
              id={id}
              active={id === activeId}
              title={title}
              contents={contents}/>
          );
        })}
      </div>
    );
  }
}

export default List;

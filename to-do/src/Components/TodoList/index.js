import React from 'react';
import CBox from './Cbox'


class TodoList extends React.Component {  
  render () {
    const { list } = this.props;
    console.log(list);
    return (
      <div>
        <h3>Lists</h3>
        {list.map(
          (item, index) => (
            <div key={index}>
              <CBox label={item} />
              <button 
                onClick={
                  () => this.props.onDelete(item)
                }
              >delete</button>
            </div>
          )
        )}
      </div>
    )
  }
}

export default TodoList;
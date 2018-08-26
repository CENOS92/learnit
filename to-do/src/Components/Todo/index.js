import React from "react";
import TodoInput from '../TodoInput/'
import TodoList from '../TodoList/'

class Todo extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      list: [
        "Practice React",
        "Deploy Vue project"
      ]
    }
  }

  handleAdd = (value) => {
    console.log(`${value} is added`)
    this.setState({
      list: [...this.state.list, value]
    })
  }

  handleDelete = (value) => {
    this.setState({
      list: this.state.list.filter(item => item !== value)
    })
    console.log(this.state.list)
  }

  render () {
    return (
      <div>
        <TodoInput onAdd={this.handleAdd}/>
        <TodoList list={this.state.list} 
          onDelete={this.handleDelete} />
      </div>
    )
  }
}

export default Todo;
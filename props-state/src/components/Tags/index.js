import React from 'react';

class List extends React.Component {
  render() {
    const { tags } = this.props;
    return (
      <div>
        <h1>태그</h1>
        {tags.map(
          (item, index) => <li key={index}>{item}</li>
        )}
      </div>
    );
  }
}

class Adder extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      vlaue: ''
    }
  }

  handleChange = (e) => {
    const value = e.target.value;
    this.setState({
      // vlaue: value;
      value,
    });
  }

  render() {
    return (
      <div>
        <input 
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button 
          onClick={() => this.props.onAdd(this.state.value)}
        >추가</button>
      </div>
    );
  }
}

class Tags extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      tags : [
        '이태언카페',
        '신사동맛집',
        '가을코디'
      ]
    }
  }

  handleAdd = (tag) => {
    console.log(`자식이 넘긴 태그: ${tag}`)
    this.setState({
      tags : [...this.state.tags, tag]
    })
  }

  render() {
    return (
      <div>
        <List tags={this.state.tags}/>
        <Adder
          onAdd={this.handleAdd}
          />
      </div>
    );
  }
}

export default Tags;
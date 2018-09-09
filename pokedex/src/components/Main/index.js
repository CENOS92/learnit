import React, { Component } from 'react';
import Info from '../Info';

/**
 * Life Cycle : 
 */

class Main extends Component {
  constructor (props) {
    super(props);
    this.state = {
      pokemon: {},
      value: '',
    }
  }

  handleValue = (e) => {
    const {value} = e.target;
    this.setState({ value });
  }

  handleClick = () => {
    const { value } = this.state;
    alert(`${value}가 입력되었습니다..`)
  }

  render() {
    const { pokemon, value } = this.state;
    return (
      <div>
        <Info pokemon={pokemon} />
        <div>
          <input 
            value={value}
            onChange={this.handleValue}/>
          <button
            onClick={this.handleClick}>조회</button>
        </div>
      </div>
    );
  }
}

export default Main;
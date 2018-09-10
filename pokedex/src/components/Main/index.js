import React, { Component } from 'react';
import styled from 'styled-components';
import Info from '../Info';

/**
 * Life Cycle : 컴포넌트의 porps 또는 state가 변할 때 작동, 
 * 각 시점별 로직을 작성하기 위함
 * 
 *  - componentDidMount: DOM에 그리고 난 직후, 
 *    (statefull한 상황, e.g. kakao talk)여기서 Server를 계속 바라보고 있는 Listner를 설정
 *  - componentDidUpdate: setState로 업데이트 된 순간
 *  - componentWillUnmount: (라우팅 할 때) 이전 페이지가 사라지기 전에, 주로 Listener 해제하기 위해
 */

class Main extends Component {
  constructor (props) {
    super(props);
    this.state = {
      pokemon: {},
      value: '',
    }
  }

  // componentDidMount () {
  //   console.log('componentDidMount: Rendered')
  //   fetch('https://pokeapi.co/api/v2/pokemon/1/')
  //   .then((response) => {
  //     console.log('response', response);
  //     return response.json()
  //   })
  //   .then((data) => {
  //     const { id, name, weight, sprites } = data;
  //     console.log({
  //       id, 
  //       name, 
  //       weight, 
  //       sprites
  //     });
  //   })
  // }

  async componentDidMount () {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/1/')
    const data = await response.json(); // json으로 만드는게 왜 async로 되어야 하는지?
    this.setState({
      pokemon: data
    })
  }


  handleValue = (e) => {
    const {value} = e.target;
    this.setState({ value });
  }

  // handleClick = () => {
  //   const { value } = this.state;
  //   alert(`${value}가 입력되었습니다..`)
  // }

  handleClick = async () => {
    const { value } = this.state;
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${value}`);
    const data = await response.json();
    this.setState({
      pokemon: data
    })
  }

  render() {
    const { pokemon, value } = this.state;
    return (
      <Wrapper>
        <Info pokemon={pokemon} />
        <div>
          <StyledInput 
            value={value}
            onChange={this.handleValue}/>
          <button
            onClick={this.handleClick}>조회</button>
        </div>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  width: 500px;
  margin: 0 auto;
`;

const StyledInput = styled.input`
  height: 20px;
  width: 100px;
  border: 1px solid #333;
`;

export default Main;
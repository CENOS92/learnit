import React, { Component } from 'react';
import styled from 'styled-components';
import Proptypes from 'prop-types'

class Info extends Component {
  
  componentDidUpdate (prevProps) {
    // UX (로딩이 끝났다 등)
    if (prevProps.pokemon !== this.props.pokemon){
      // alert('업데이트 되었습니다.')
    }
  }
  
  render() {
    const { pokemon } = this.props;
    const { id, name, weight, sprites } = pokemon;
    // console.log(pokemon); // 처음 렌더링 땐 {}, setState로 update 되었을 땐 json 정보가 찍힘
    
    let images;
    if (sprites) {
      images = Object.keys(sprites).map((key) => {
        const value = sprites[key];
        return <img src={value} key={key} />
      });
    }

    return (
      <Wrapper>
        {images}
        <div>
          <div>ID: {id}</div>
          <div>이름: {name}</div>
          <div>무게 : {weight}</div>
        </div>
      </Wrapper>
    );
  }
}

/**
 * styled의 장점: props를 넘길 수 있다
 * JSX : <Wrapper isActive={isActive}>
 * 
 */
const Wrapper = styled.div`
  background-color: grey;
`;

Info.proptypes = {
  pokemon: Proptypes.string
}


export default Info;
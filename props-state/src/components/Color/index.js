import React from 'react';

class Color extends React.Component {
	// class 구성자
	constructor (props) {
		super(props);
		// state 선언
		this.state = {
			selectedColor: 'RED',
		}
	}

	// onClick 처리 (함수 표현식)
	handleClick = (type) => {
		console.log(`${type} 버튼이 클릭되었습니다.`);
		
		// state를 바꾸는 유일한 방법 : this.setState (여러 스테이트 변경을 취합해서 한꺼번에 렌더링)
		this.setState({
			selectedColor: type
		});
	}    
	
	// class method로 작성 시 (closure pattern : 함수를 리턴)
	// handleClick = (type) => () => {
	// 	this.setState({
	// 		selectedColor: type
	// 	})
	// }
	// <button onClick={this.handleClick('RED')}>RED</button> 
	// JSX의 가독성이 좋아짐


	// 바로 메소드 (함수) 작성시에는
	// handleClick() {

	// }
	// constructor에 `this.handleClick = this.handleClick.bind(this);`를 적어주어야 함

	render () {
		this.state.selectedColor;
		return (
			<div>
				<h1>선택한 색깔 : {this.state.selectedColor}</h1>
				<button onClick={() => this.handleClick('RED')}>RED</button>
				<button onClick={() => this.handleClick('GREEN')}>GREEN</button>
				<button onClick={() => this.handleClick('BLUE')}>BLUE</button>
			</div>
		)
	}
}

export default Color;
import React from 'react';

class Artists extends React.Component {
	render () {
		// this : instance화 되었을 때 객체 자신
		console.log(this.props.list);
		
		/* 
		react가 <li> 태그를 맨처음 그릴 때 전체 array를 돌지만
		ui 업데이트를 할 때 엘리먼트를 key를 이용하여 정확한 위치를 찾아낼 수 있어야 함
		(index를 사용하면 길이가 달라지면 인덱스도 달라지기 때문에 쓰지 않는 것이 좋다)
		*/
		return (
			<ul>
				{
					this.props.list.map(
					(item, index) => <li key={index}>{item}</li>
				)}
			</ul>
		)
	}
}

class List extends React.Component {  
	render () {
		// object가 아니라 list아니기 때문에 key로 줄 것이 없다. => index 사용
		const artists = [
			'악동뮤지션',
			'방탄소년단',
			'걸스데이',
			'트와이스',
			'모모랜드',
			'나인뮤지스'
		];
		return (
			<div>
				<h1>한국의 아티스트</h1>
				{/* artists라는 배열을 list라는 이름의 props로 넘긴다 */}
				<Artists list={artists} />
			</div>
		)
	}
}

export default List;
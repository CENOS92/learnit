import React from 'react';

class SearchInput extends React.Component {
  render () {
    this.props.value;
    console.log(this.props.value);
    return (
      <input value={this.props.value}
      onChange={this.props.onChange}
      />
      
    )
  }
}

class Search extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      value: ''
    }
  }

  handleChange = (e) => {
    const value = e.target.value;
    console.log('value', value);
    this.setState({
      value: value
    });
  }

  render () {
    const { value } = this.state;
    return (
      <div>
        <h1>검색어: {value}</h1>
        {/* state의 값과 이벤트 핸들러를 props로 넘겨줌 */}
        <SearchInput 
          value={value}
          onChange={this.handleChange}/>
      </div>
    )
  }
}

export default Search;
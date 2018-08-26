import React from 'react';

/**
 * CBox는 교재 참고
 */
class CBox extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      checked: false
    }
  }
  
  render () {
    let mark = '◻︎'
    let bstyle = {fontWeight: 'normal'}
    if (this.state.checked) {
      mark = '◼︎'
      bstyle = {fontWeight: 'bold'}
    }
    
    const clickHandler = (e) => {
      const newValue = !this.state.checked
      this.setState({checked: newValue})
    }
    return (
      <div onClick={clickHandler} style={bstyle}>
        {mark} {this.props.label}
      </div>
    )
  }
}

export default CBox;
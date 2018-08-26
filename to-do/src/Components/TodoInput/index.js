import React from "react";

class TodoInput extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			value: ''
		}
	}

	onChange = (e) => {
		const value = e.target.value;
		console.log(`changed : ${value}`)
		this.setState({
			value
		})
	}

	clearInput = () => {
		this.setState({
			value: ''
		})
	} 

	render () {
		return (
			<div>
				<input 
					value={this.state.value}
					onChange={this.onChange}
					placeholder='Add New To-do'/>
				<button 
					onClick={
						() => [this.props.onAdd(this.state.value), this.clearInput()]
					}
				>add</button>
			</div>
		)
	}
}

export default TodoInput;
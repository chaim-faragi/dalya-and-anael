import React, { Component } from 'react'

class div extends Component {
	constructor(props) {
		super(props)

		this.state = {
            roomname: '',
            roomcolor: '',
			comments: '',
			roomtype: '',
		}
	}

	handleroomnameChange = event => {
		this.setState({
			roomname: event.target.value
		})
    }
    handleroomcolorChange = event => {
		this.setState({
			roomcolor: event.target.value
		})
	}

	handleCommentsChange = event => {
		this.setState({
			comments: event.target.value
		})
	}

	handleroomtypeChange = event => {
		this.setState({
			roomtype: event.target.value
		})
	}

	handleSubmit =() => {
        if (this.state.roomname.length>1){

        this.props.add(this.state.roomname,this.state.roomcolor,this.state.roomtype)}
		// alert(`${this.state.roomname} ${this.state.comments} ${this.state.roomtype}`)
        // event.preventDefault()
        else {alert(`your roomname ${this.state.roomname} is not vaild `)}
	}

	render() {
		const { roomname, comments, roomtype,roomcolor } = this.state
		return (
			<div >
				<div>
					<label>roomname </label>
					<input
						type="text"
                        value={roomname}
                        maxLength='5'
						onChange={this.handleroomnameChange}
					/>
				</div>
                <div>
					<label>roomcolor </label>
					<input
						type="text"
                        value={roomcolor}
						onChange={this.handleroomcolorChange}
					/>
				</div>
				<div>
					<label>tell us what you think</label>
					<textarea
						value={comments}
						onChange={this.handleCommentsChange}
					/>
				</div>
				<div>
					<label>roomtype</label>
					<select value={roomtype} onChange={this.handleroomtypeChange}>
						<option value="bedroom">bedroom</option>
						<option value="kitchen">kitchen</option>
						<option value="bathroom">bathroom</option>
					</select>
				</div>
				<button onClick={this.handleSubmit}>creat room</button>
			</div>
		)
	}
}

export default div

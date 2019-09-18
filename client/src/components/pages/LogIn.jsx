import React, { Component } from 'react';

class LogIn extends Component {
	state = {
		username: '',
		password: ''
	}
	render() {
		return (
			<form className="container mt-4">
				<div className="form-group">
					<label for="Username">Username</label>
					<input type="text" className="form-control" id="Username" placeholder="Enter Username" />
				</div>
				<div className="form-group">
					<label for="Password">Password</label>
					<input type="password" className="form-control" id="Password" placeholder="Password" />
				</div>
				<button type="submit" className="btn btn-primary">
					Submit
				</button>
			</form>
		);
	}
}

export default LogIn;

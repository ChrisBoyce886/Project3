import React, { Component } from 'react';
import SignupBtn from '../SubmitBtn/SignupBtn';
import CredentialsAPI from '../../utils/CredentialsAPI';
import style from "./style.css"

class LogIn extends Component {
	state = {
		username: '',
		password: ''
	};

	handleInputChange = (event) => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
		// console.log(`Incremental logs of each typed character`, this.state)
	};

	handleSubmit = (event) => {
		event.preventDefault();

		
		// console.log(`Typed credentials`, this.state)
		CredentialsAPI.AuthenticateUser(this.state)
			.then((res) => {
				window.sessionStorage.setItem('authToken', res.data);
				this.props.setAuthState(res.data);
				this.props.history.push("/UserProfile")
			})
			.catch((err) => {
				console.log(`Error from API function Authenticate User`, err);
			});
	};
	render() {
		return (
			<div className="card">
				<div className="card-header">Login</div>
				<div className="card-body text-align-center">
			<form className="container mt-4">
				<div className="form-group">
					<label id="loginLabel" htmlFor="username">Username</label>
					<input
						id="loginInput"
						type="text"
						className="form-control"
						name="username"
						value={this.state.username}
						onChange={this.handleInputChange}
						placeholder="Enter Username"
					/>
				</div>
				<div className="form-group">
					<label id="loginLabel" htmlFor="password">Password</label>
					<input
						id="loginInput"
						type="password"
						className="form-control"
						name="password"
						value={this.state.password}
						onChange={this.handleInputChange}
						placeholder="Enter Password"
					/>
				</div>
				<SignupBtn type="success" onClick={this.handleSubmit} />
			</form>
			</div>
			</div>
		);
	}
}

export default LogIn;

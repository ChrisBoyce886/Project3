import React, { Component } from 'react';
import SignupBtn from '../SubmitBtn/SignupBtn';
import CredentialsAPI from '../../utils/CredentialsAPI';
import "./style.css"


class SignUp extends Component {
	state = {
		firstname: '',
		lastname: '',
		email: '',
		username: '',
		password: '',
		retypedpassword: ''
	};

	handleInputChange = (event) => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();
		if (this.state.password === this.state.retypedpassword) {
			// console.log(`Passwords are the same`);
			CredentialsAPI.CreateNewUser(this.state)
		} else {
			// need modal stating passwords are not the same
			// then clear out password field without other fields
			console.log(`Passwords are not`);
		}

		// console.log(this.state);
		window.location.href="/"
	}

	render() {
		return (
			<div className="card text-align-center" id="signupCard">
				<div className="card-header text-align-center">Sign Up</div>
				<div className="card-body">
			<form className="container mt-4" id="signupContainer">
				<div className="form-group">
					<label id="signupLabel" htmlFor="FirstName">First Name</label><br />
					<input
						id="signupInput"
						type="text"
						className="form-control"
						name="firstname"
						value={this.state.firstname}
						onChange={this.handleInputChange}
						placeholder="Enter First Name"
					/>
				</div>
				<div className="form-group">
					<label id="signupLabel" htmlFor="LastName">Last Name</label><br />
					<input
						id="signupInput"
						type="text"
						className="form-control"
						name="lastname"
						value={this.state.lastname}
						onChange={this.handleInputChange}
						placeholder="Enter Last Name"
					/>
				</div>
				<div className="form-group">
					<label id="signupLabel" htmlFor="Email">Email</label><br />
					<input
						id="signupInput"
						type="email"
						className="form-control"
						name="email"
						value={this.state.email}
						onChange={this.handleInputChange}
						placeholder="Enter Email Address"
					/>
				</div>
				<div className="form-group">
					<label id="signupLabel" htmlFor="Username">Username</label><br />
					<input
						id="signupInput"
						type="username"
						className="form-control"
						name="username"
						value={this.state.username}
						onChange={this.handleInputChange}
						placeholder="Enter Username"
					/>
				</div>
				<div className="form-group">
					<label id="signupLabel" htmlFor="Password">Password</label><br />
					<input
						id="signupInput"
						type="password"
						className="form-control"
						name="password"
						value={this.state.password}
						onChange={this.handleInputChange}
						placeholder="Enter Password"
					/>
				</div>
				<div className="form-group">
					<label id="signupLabel" htmlFor="RetypePassword">Retype Password</label><br />
					<input
						id="signupInput"
						type="password"
						className="form-control"
						name="retypedpassword"
						value={this.state.retypedpassword}
						onChange={this.handleInputChange}
						placeholder="Retype Your Password"
					/>
				</div>
				<SignupBtn type="success" onClick={this.handleSubmit} />
			</form>
			</div>
			</div>
		);
	}
}

export default SignUp;

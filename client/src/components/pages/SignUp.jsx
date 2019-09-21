import React, { Component } from 'react';
import SubmitBtn from '../SubmitBtn/SubmitBtn';
import CredentialsAPI from '../../utils/CredentialsAPI';


class SignUp extends Component {
	state = {
		firstname: '',
		lastname: '',
		email: '',
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
			console.log(`Passwords are the same`);
			CredentialsAPI.CreateNewUser(this.state)
		} else {
			// need modal stating passwords are not the same
			// then clear out password field without other fields
			console.log(`Passwords are not`);
		}

		console.log(this.state);
	};

	render() {
		return (
			<form className="container mt-4">
				<div className="form-group">
					<label htmlFor="FirstName">First Name</label>
					<input
						type="text"
						className="form-control"
						name="firstname"
						value={this.state.firstname}
						onChange={this.handleInputChange}
						placeholder="First Name"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="LastName">Last Name</label>
					<input
						type="text"
						className="form-control"
						name="lastname"
						value={this.state.lastname}
						onChange={this.handleInputChange}
						placeholder="Last Name"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="Email">Email</label>
					<input
						type="email"
						className="form-control"
						name="email"
						value={this.state.email}
						onChange={this.handleInputChange}
						placeholder="Email Address"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="Password">Password</label>
					<input
						type="password"
						className="form-control"
						name="password"
						value={this.state.password}
						onChange={this.handleInputChange}
						placeholder="Password"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="RetypePassword">Retype Password</label>
					<input
						type="password"
						className="form-control"
						name="retypedpassword"
						value={this.state.retypedpassword}
						onChange={this.handleInputChange}
						placeholder="Retype Your Password"
					/>
				</div>
				<SubmitBtn type="success" onClick={this.handleSubmit}/>
			</form>
		);
	}
}

export default SignUp;

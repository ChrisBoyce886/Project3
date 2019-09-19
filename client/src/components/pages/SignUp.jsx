import React, { Component } from 'react';
import SubmitBtn from '../SubmitBtn/SubmitBtn'

class SignUp extends Component {
	state = {
		firstname: '',
		lastname: '',
		email: '',
		password: '',
		retypedpassword: ''
	};

	handleSubmit = (event) => {
		
	}

	render() {
		return (
			<form className="container mt-4">
				<div className="form-group">
					<label htmlFor="FirstName">First Name</label>
					<input type="text" className="form-control" name="FirstName" placeholder="First Name" />
				</div>
				<div className="form-group">
					<label htmlFor="LastName">Last Name</label>
					<input type="text" className="form-control" name="LastName" placeholder="Last Name" />
				</div>
				<div className="form-group">
					<label htmlFor="Email">Email</label>
					<input type="email" className="form-control" name="Email" placeholder="Email Address" />
				</div>
				<div className="form-group">
					<label htmlFor="Password">Password</label>
					<input type="password" className="form-control" name="Password" placeholder="Password" />
				</div>
				<div className="form-group">
					<label htmlFor="RetypePassword">Retype Password</label>
					<input
						type="text"
						className="form-control"
						name="PasswordRetype"
						placeholder="Retype Your Password"
					/>
				</div>
				<SubmitBtn></SubmitBtn>
			</form>
		);
	}
}

export default SignUp;

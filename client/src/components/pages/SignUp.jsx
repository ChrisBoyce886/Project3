import React, { Component } from 'react';

class SignUp extends Component {
	state = {
		firstname: '',
		lastname: '',
		email: '',
		password: '',
		retypedpassword: '',
	};
	render() {
		return (
			<form className="container mt-4">
				<div className="form-group">
					<label htmlFor="FirstName">First Name</label>
					<input type="text" className="form-control" id="FirstName" placeholder="First Name" />
				</div>
				<div className="form-group">
					<label htmlFor="LastName">Last Name</label>
					<input type="text" className="form-control" id="LastName" placeholder="Last Name" />
				</div>
				<div className="form-group">
					<label htmlFor="Email">Email</label>
					<input type="email" className="form-control" id="Email" placeholder="Email Address" />
				</div>
				<div className="form-group">
					<label htmlFor="Password">Password</label>
					<input type="password" className="form-control" id="Password" placeholder="Password" />
				</div>
				<div className="form-group">
					<label htmlFor="RetypePassword">Retype Password</label>
					<input
						type="text"
						className="form-control"
						id="PasswordRetype"
						placeholder="Retype Your Password"
					/>
				</div>
				<button type="submit" className="btn btn-primary">
					Submit
				</button>
			</form>
		);
	}
}

export default SignUp;

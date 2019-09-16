import React from 'react';

function SignUp() {
    return (
        <form className="container mt-4">
			<div className="form-group">
				<label for="FirstName">First Name</label>
				<input type="text" className="form-control" id="FirstName" placeholder="First Name" />
			</div>
			<div className="form-group">
				<label for="LastName">Last Name</label>
				<input type="text" className="form-control" id="LastName" placeholder="Last Name" />
			</div>
			<div className="form-group">
				<label for="Email">Email</label>
				<input type="email" className="form-control" id="Email" placeholder="Email Address" />
			</div>
			<div className="form-group">
				<label for="Password">Password</label>
				<input type="password" className="form-control" id="Password" placeholder="Password" />
			</div>
			<div className="form-group">
				<label for="RetypePassword">Retype Password</label>
				<input type="text" className="form-control" id="PasswordRetype" placeholder="Retype Your Password" />
			</div>
			<button type="submit" className="btn btn-primary">
				Submit
			</button>
		</form>
    )
};

export default SignUp
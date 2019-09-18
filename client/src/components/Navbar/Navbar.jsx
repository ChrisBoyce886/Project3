import React from 'react';

function Navbar() {
	return (
		<div>
			<nav className="navbar sticky-top navbar-dark bg-dark">
				<a href="/" className="navbar-brand display-4">
					<h3 className="display-4">Earth Trek</h3>
				</a>
				<ul className="nav justify-content-end">
					<li className="nav-item">
						<a href="/" className="nav-link active">
							<h4>Home</h4>
						</a>
					</li>
					<li className="nav-item">
						<a href="/AboutUs/" className="nav-link active">
							<h4>About Us</h4>
						</a>
					</li>
					<li className="nav-item">
						<a href="/LogIn/" className="nav-link active">
							<h4>Log In</h4>
						</a>
					</li>
					<li className="nav-item">
						<a href="/SignUp/" className="nav-link active">
							<h4>Sign Up</h4>
						</a>
					</li>
				</ul>
			</nav>
		</div>
	);
}

export default Navbar;

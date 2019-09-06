import React from 'react';

function Navbar() {
	return (
		<div>
			<nav className="navbar display-4 sticky-top navbar-dark bg-dark">
				<a href="/" className="navbar-brand display-4">
					<h3 className="display-4">Earth Trek</h3>
				</a>
				<ul className="nav justify-content-end">
					<li className="nav-item">
						<a href="/AboutUs/" className="nav-link active">
							About Us
						</a>
					</li>
					<li className="nav-item">
						<a href="/LogIn/" className="nav-link active">
							Log In
						</a>
					</li>
					<li className="nav-item">
						<a href="/SignUp/" className="nav-link active">
							Sign Up
						</a>
					</li>
				</ul>
			</nav>
		</div>
	);
}

export default Navbar;

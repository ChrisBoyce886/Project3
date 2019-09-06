import React from 'react';

function Navbar() {
	return (
		<div>
			<nav className="navbar sticky-top navbar-dark bg-dark">
				<a href="/" className="navbar-brand">
					Earth Trek
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

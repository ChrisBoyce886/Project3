import React from 'react';
import './NavbarStyle.css';

const Navbar = (props) => {
	if (!localStorage.getItem('authToken')) {
		return (
			<div>
				<nav className="navbar sticky-top navbar-dark bg-dark">
					<a href="/" className="navbar-brand display-4">
						<h3 className="display-4" id="EarthTrekLogo">
							Earth Trek
						</h3>
					</a>
					<ul className="nav justify-content-end">
						<li className="nav-item">
							<a href="/" className="nav-link active">
								<h4 id="nav-item">Home</h4>
							</a>
						</li>
						<li className="nav-item">
							<a href="/AboutUs/" className="nav-link active">
								<h4 id="nav-item">About Us</h4>
							</a>
						</li>
						<li className="nav-item">
							<a href="/LogIn/" className="nav-link active">
								<h4 id="nav-item">Log In</h4>
							</a>
						</li>
						<li className="nav-item">
							<a href="/SignUp/" className="nav-link active">
								<h4 id="nav-item">Sign Up</h4>
							</a>
						</li>
					</ul>
				</nav>
			</div>
		);
	} else {
		return (
			<div>
				<nav className="navbar sticky-top navbar-dark bg-dark">
					<a href="/" className="navbar-brand display-4">
						<h3 className="display-4" id="EarthTrekLogo">
							Earth Trek
						</h3>
					</a>
					<ul className="nav justify-content-end">
						<li className="nav-item">
							<a href="/" className="nav-link active">
								<h4 id="nav-item">Home</h4>
							</a>
						</li>
						<li className="nav-item">
							<a href="/AboutUs/" className="nav-link active">
								<h4 id="nav-item">About Us</h4>
							</a>
						</li>
						<li className="nav-item">
							<a href="/UserProfile/" className="nav-link active">
								<h4 id="nav-item">Profile</h4>
							</a>
						</li>
						<li className="nav-item">
							<a href="/Logout/" className="nav-link active">
								<h4 id="nav-item">Logout</h4>
							</a>
						</li>
					</ul>
				</nav>
			</div>
		)
	}
};

export default Navbar;

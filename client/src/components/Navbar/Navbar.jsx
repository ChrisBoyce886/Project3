import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavbarStyle.css';

class Navbar extends Component {

	LogOut = () => {
		console.log('Ran Logout Function');
		this.props.setAuthState(null);
		window.localStorage.removeItem('authToken');
	};

	render() {
		if (!this.props.isAuthenticated) {
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
									<h4 cl="nav-item">Home</h4>
								</a>
							</li>
							<li className="nav-item">
								<Link to="/AboutUs/" className="nav-link active">
									<h4 className="nav-item">About Us</h4>
								</Link>
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
								<Link to="/AboutUs/" className="nav-link active">
									<h4 className="nav-item">About Us</h4>
								</Link>
							</li>
							<li className="nav-item">
								<a href="/UserProfile/" className="nav-link active">
									<h4 id="nav-item">Profile</h4>
								</a>
							</li>
							<li className="nav-item">
								<a href="/" onClick={this.LogOut} className="nav-link active">
									<h4 id="nav-item">Logout</h4>
								</a>
							</li>
						</ul>
					</nav>
				</div>
			);
		}
	}
}

export default Navbar;

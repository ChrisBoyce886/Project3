import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavbarStyle.css';
import Logo from './Logo'

class Navbar extends Component {
	LogOut = () => {
		console.log('Ran Logout Function');
		this.props.setAuthState(null);
		window.sessionStorage.removeItem('authToken');
	};

	render() {
		if (!this.props.isAuthenticated) {
			return (
				<div>
					<nav className="navbar sticky-top navbar-dark bg-dark">
						<Link to="/" className="navbar-brand display-4">
						<Logo />
							<h3 className="display-4" id="EarthTrekLogo">
								Earth Trek
							</h3>
						</Link>
						<ul className="nav justify-content-end">
							<li className="nav-item">
								<Link to="/" className="nav-link active">
									<h4 className="nav-item">Home</h4>
								</Link>
							</li>
							<li className="nav-item">
								<Link to="/AboutUs" className="nav-link active">
									<h4 className="nav-item">About Us</h4>
								</Link>
							</li>
							<li className="nav-item">
								<Link to="/LogIn" className="nav-link active">
									<h4 className="nav-item">Log In</h4>
								</Link>
							</li>
							<li className="nav-item">
								<Link to="/SignUp" className="nav-link active">
									<h4 className="nav-item">Sign Up</h4>
								</Link>
							</li>
						</ul>
					</nav>
				</div>
			);
		} else {
			return (
				<div>
					<nav className="navbar sticky-top navbar-dark bg-dark">
						<Link to="/" className="navbar-brand display-4">
						<Logo />
							<h3 className="display-4" id="EarthTrekLogo">
								Earth Trek
							</h3>
						</Link>
						<ul className="nav justify-content-end">
							<li className="nav-item">
								<Link to="/" className="nav-link active">
									<h4 className="nav-item">Home</h4>
								</Link>
							</li>
							<li className="nav-item">
								<Link to="/AboutUs" className="nav-link active">
									<h4 className="nav-item">About Us</h4>
								</Link>
							</li>
							<li className="nav-item">
								<Link to="/UserProfile" className="nav-link active">
									<h4 className="nav-item">Profile</h4>
								</Link>
							</li>
							<li className="nav-item">
								<Link to="/" onClick={this.LogOut} className="nav-link active">
									<h4 className="nav-item">Logout</h4>
								</Link>
							</li>
						</ul>
					</nav>
				</div>
			);
		}
	}
}

export default Navbar;

import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/pages/Home';
import AboutUs from './components/pages/AboutUs';
import LogIn from './components/pages/LogIn';
import SignUp from './components/pages/SignUp';
import UserProfile from './components/pages/UserProfile';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

class App extends Component {
	state = {
		isAuthenticated: false,
		authToken: null
	};

	setAuthState = (authToken) => {
		this.setState({
			authToken,
			isAuthenticated: Boolean(authToken)
		});
		// console.log(`After setState is ran:`, this.state.authToken);
	};

	componentDidMount() {
		const authToken = window.sessionStorage.getItem('authToken');

		if (authToken) {
			// console.log(`AuthToken pulled for sessionStorage:`, authToken);
			this.setAuthState(authToken);
			// console.log(`The state.authToken:`, this.state.authToken);
		} else {
			// console.log('No authToken');
		}
	}

	render() {
		return (
			<Router>
				<div>
					<Navbar isAuthenticated={this.state.isAuthenticated} setAuthState={this.setAuthState} />
					<Switch>
						<Route
							exact
							path="/"
							render={(props) => <Home {...props} authToken={this.state.authToken} />}
						/>
						<Route exact path="/AboutUs" component={AboutUs} />
						<Route
							exact
							path="/LogIn"
							render={(props) => <LogIn {...props} setAuthState={this.setAuthState} />}
						/>
						<Route exact path="/SignUp" component={SignUp} />
						<PrivateRoute
							exact
							path="/UserProfile"
							component={UserProfile}
							isAuthenticated={this.state.isAuthenticated}
							authToken={this.state.authToken}
						/>
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;

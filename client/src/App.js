import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/pages/Home';
import AboutUs from './components/pages/AboutUs';
import LogIn from './components/pages/LogIn';
import SignUp from './components/pages/SignUp';
import UserProfile from './components/pages/UserProfile'
import PrivateRoute from './components/PrivateRoute/PrivateRoute'



class App extends Component {
	state = {
		isAuthenticated: false
	};

	setAuthenticatedState = (isAuthenticated) => this.setState({ isAuthenticated });
	
	render() {
		return (
			<Router>
				<div>
					<Navbar isAuthenticated={this.state.isAuthenticated}/>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/AboutUs/" component={AboutUs} />
						<Route exact path="/LogIn/" render={(props) => <LogIn {...props} setAuthenticatedState={this.setAuthenticatedState}/>} />
						<Route exact path="/SignUp/" component={SignUp} />
						<PrivateRoute exact path="/UserProfile/" component={UserProfile}></PrivateRoute>
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;

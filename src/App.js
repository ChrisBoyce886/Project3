import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/pages/Home';
import AboutUs from './components/pages/AboutUs';
import LogIn from './components/pages/LogIn';
import SignUp from './components/pages/SignUp';

class App extends Component {
	state = {
		isAuthenticated: false
	};
	render() {
		return (
			<Router>
				<div>
					<Navbar />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/AboutUs/" component={AboutUs} />
						<Route exact path="/LogIn/" component={LogIn} />
						<Route exact path="/SignUp/" component={SignUp} />
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;

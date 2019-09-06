import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

function App() {
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

export default App;

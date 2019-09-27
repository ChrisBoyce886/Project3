import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
	// console.log(rest)
	return (
		<Route
			{...rest}
			render={(props) =>
				rest.isAuthenticated ? (
					<Component {...props} />
				) : (
					<Redirect to={{ pathname: '/', state: { from: props.location } }} />
				)}
		/>
	);
};

export default PrivateRoute;

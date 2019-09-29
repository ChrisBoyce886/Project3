import React from 'react';
import FavoriteColumn from '../FavoriteColumn/FavoriteColumn';
import PlanColumn from '../FavoriteColumn/FavoriteColumn';
import DoneColumn from '../DoneColumn/DoneColumn';

const UserProfile = (props) => {
	// console.log(`User's Auth Token:`, props.authToken)

	return (
		<div className="row mw-100">
			<div className="col-4 h-75">
				<PlanColumn authToken={props.authToken}/>
			</div>
			<div className="col-4 h-75">
				<FavoriteColumn authToken={props.authToken}/>
			</div>
			<div className="col-4 h-75">
				<DoneColumn authToken={props.authToken}/>
			</div>
		</div>
	);
};

export default UserProfile;

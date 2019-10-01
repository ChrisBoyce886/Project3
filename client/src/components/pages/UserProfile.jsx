import React, { Component } from 'react';
import Plan_Column from '../Plan_Column/Plan_Column';
import Done_Column from '../Done_Column/Done_Column';
import Favorite_Column from '../Favorite_Column/Favorite_Column';

class UserProfile extends Component {
	

	render(){
	return <div className="row mw-100">
		<div className="col-4 h-75">
			<Favorite_Column></Favorite_Column>
		</div>
		<div className="col-4 h-75">
			<Plan_Column></Plan_Column>
		</div>
		<div className="col-4 h-75">
			<Done_Column></Done_Column>
		</div>
	</div>;
};
}

export default UserProfile;

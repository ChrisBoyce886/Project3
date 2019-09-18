import React, { Component } from "react";
import API from "../../utils/API";
import SubmitBtn from '../SubmitBtn/SubmitBtn';

class SearchBar extends Component{
	state = {
		locations: [],
		trailSearch: ""	
	}
	handleInputChange = event => {
		// Destructure the name and value properties off of event.target
		// Update the appropriate state
	
		const { name, value } = event.target;
		this.setState({
		  [name]: value
		});
		console.log({ [name]: value });
	  };

	handleSubmit = event => {
	event.preventDefault();
	API.getGeoData(this.state.trailSearch).then(res => this.setState({locations : res.data})).catch(err => console.log(err));  
}


render = () => {
	return (
		<div className="form-group vh-100 d-flex align-items-center m-0">
			<label htmlFor="search" className="d-flex">Where would you like to hike?</label>
			<div class="container d-flex">
				<input 
				value={this.state.trailSearch}
				onChange={this.handleInputChange}
				placeholder="Search for Trails"
				className="form-control mr-2" name="trailSearch" />
				<SubmitBtn
				type="success"
				onClick={this.handleSubmit} 
				/>
			</div>
		</div>
	);
};
};
export default SearchBar;

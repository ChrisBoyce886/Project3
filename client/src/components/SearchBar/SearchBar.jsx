import React, { Component } from "react";
import API from "../../utils/API";
import SubmitBtn from '../SubmitBtn/SubmitBtn';
import { Container, Row, Col } from "../Grid";
import { TrailList, TrailListItem } from "../TrailList/index";



class SearchBar extends Component{
	state = {
		trails: [],
		geoLocation: [],
		lat : "",
		lon : "",
		trailSearch: ""	
	}
	handleInputChange = event => {
		// Destructure the name and value properties off of event.target
		// Update the appropriate state
	
		const { name, value } = event.target;
		this.setState({
		  [name]: value
		});
	  };

	handleSubmit = event => {
	event.preventDefault();
	API.getGeoData(this.state.trailSearch).then(res => 
	this.setState({lon : res.data.features[0].geometry.coordinates[0]}) ||  
	this.setState({lat : res.data.features[0].geometry.coordinates[1]}) || API.getTrails(this.state.lat, this.state.lon).then(res => this.setState({ trails : res.data.data}))
	.catch(err => console.log(err)))
	.catch(err => console.log(err))
	// this.setState({ lon : this.state.geoLocation[0]})
	// this.setState({ lat : this.state.geoLocation[1]})
	
	// API.getTrails(this.state.lat, this.state.lon).then(res => 
	// console.log("eto response",res.data.data))
	// .catch(err => console.log(err));	
	// console.log('tnhis is data trails',this.state.trails)
	// API.
}




render = () => {
	console.log('lat',this.state.trails)
	return (
		<div className="container">
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
		{/* Bohnda added this pies here!!! */}
		<div className="jumbotron"> 
        <Row>
            <Col size="xl-12">
              {!this.state.trails.length ? (
                <h1 className="text-center">Lets find some trails</h1>
              ) : (
                <TrailList>
                  {this.state.trails.map(trail => {
                    return (
                      <TrailListItem
                        // savetrail={this.handleSavetrail}
						id={trail.id}
						name={trail.name}
						city={trail.city}
						region={trail.region}
						description={trail.description}
						difficulty={trail.difficulty}
						features={trail.features}
						rating={trail.rating}
						thumbnail={trail.thumbnail}
						url={trail.url}
                        length={trail.length}
                      />
                    );
                  })}
                </TrailList>
              )}
            </Col>
          </Row>
          </div>
		</div>
	);
};
};
export default SearchBar;

import React, {
	Component
} from "react";
import API from "../../utils/API";
import SubmitBtn from '../SubmitBtn/SubmitBtn';
import {
	// Container,
	Row,
	Col
} from "../Grid";
import {
	TrailList,
	TrailListItem
} from "../TrailList/index";
import style from './style.css'


class SearchBar extends Component {
	state = {
		trails: [],
		geoLocation: [],
		lat: "",
		lon: "",
		trailSearch: ""
	}
	handleInputChange = event => {
		// Destructure the name and value properties off of event.target
		// Update the appropriate state

		const {
			name,
			value
		} = event.target;
		this.setState({
			[name]: value
		});
		console.log(value)
	};
	
	handleSubmit = event => {
		event.preventDefault();
		API.getGeoData(this.state.trailSearch).then(({data}) => {
			// console.log(data);	
			API.getTrails(
					data.features[0].geometry.coordinates[1],
					data.features[0].geometry.coordinates[0]).then(res => {
					this.setState({
						trails: res.data.data,
						lon: data.features[0].geometry.coordinates[0],
						lat: data.features[0].geometry.coordinates[1]
						
					})
console.log(res.data.data)
				})

				.catch(err => console.log(err))
			})
			.catch(err => console.log(err))
		// this.setState({ lon : this.state.geoLocation[0]})
		// this.setState({ lat : this.state.geoLocation[1]})

		// API.getTrails(this.state.lat, this.state.lon).then(res =>
		// console.log("eto response",res.data.data))
		// .catch(err => console.log(err));
		// console.log('tnhis is data trails',this.state.trails)
		// API.
	}

	scrollStop = () => {
		 var top = 100
		//this should be the offset of the top of your div 
		//which can be found by doing the following line
	
		var top = this.document.getElementById('#scroll-stop').offset().top;
	console.log("TOP: " + top)
		window.onscroll = function () {
			if (top <= window.scrollTop()) {
				// if so, add the fixed class
				this.document.getElementById('#scroll-stop').addClass('fixed');
			} else {
				// otherwise remove it
				this.document.getElementById('#scroll-stop').removeClass('fixed');
			}
		}
	}
	

render = () => {
	// console.log('lat',this.state.trails)
	return (
		<div className="container">
		<div className="form-group   align-items-center m-0">	
		<div className="scroll-top" value={this.scrollStop} onscroll={this.scrollStop}>		
			<h1 htmlFor="search" className="text center" value={this.scrollStop} onscroll={this.scrollStop} id="header">Find Your Next Adventure!</h1>
			<div className="container d-flex search_container">
				<input
				id="homeInput"				
				value={this.state.trailSearch}
				onChange={this.handleInputChange}
				placeholder="Enter a city"
				className="form-control" name="trailSearch" />
			<SubmitBtn
				type="success"
				onClick={this.handleSubmit}
				/>
			</div>		
			</div>	
			<div className="jumbotron"> 
        <Row>
            <Col size="xl-12">
              
                <TrailList>
			{/* <div className="text-align-center" id="your-results">
				  <p id="your-results">Your Results</p>
			  </div> */}
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
						lat={trail.lat}
						lon={trail.lon}
                      />
					  
                    );
                  })}
                </TrailList>
              
            </Col>
          </Row>
          </div>
		</div>
		{/* Bohnda added this pies here!!! */}
		
		</div>
	);
};
};
export default SearchBar;

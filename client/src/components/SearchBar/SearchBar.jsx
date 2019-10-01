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
import './style.css'
import CredentialsAPI from '../../utils/CredentialsAPI';


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
		
	};
	
	handleSubmit = event => {
		event.preventDefault();
		API.getGeoData(this.state.trailSearch).then(({data}) => {
			API.getTrails(
					data.features[0].geometry.coordinates[1],
					data.features[0].geometry.coordinates[0]).then(res => {
					this.setState({
						trails: res.data.data,
						lon: data.features[0].geometry.coordinates[0],
						lat: data.features[0].geometry.coordinates[1]
					})
				})
				.catch(err => console.log(err))
			})
			.catch(err => console.log(err))
	}
	handleAdd = (name, city, region, rating, length, url)  => {
		// console.log(name, city, region, rating, length, url)
		const trail = {
			
			name : name, 
			city : city,
			state : region,
			rating : rating,
			lenght : length,
			url : url,
		};
		console.log(trail) 
		// alert('Trail added');
		// CredentialsAPI.PlannedTrail(trail)

	}
	scrollStop = () => {
		 var top = 100
		//this should be the offset of the top of your div 
		//which can be found by doing the following line
	
		var top = this.document.getElementById('#scroll-stop').offset().top;
			// console.log("TOP: " + top)
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
						handleAdd={this.handleAdd}
                      />
					  
                    );
                  })}
                </TrailList>
              
            </Col>
          </Row>
          </div>
		</div>
		
		</div>
	);
};
};
export default SearchBar;

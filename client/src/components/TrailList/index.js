// import React from "react";
import React from 'react';
// ,{ Component }
import Thumbnail from '../Thumbnail';
import {
	// Container,
	Row,
	Col
} from '../Grid';
import Button from '../Button';
import './style.css';
import Ratings from 'react-ratings-declarative';
import GoogleApiWrapper from '../GoogleMapsAPI/GoogleMap';




// Exporting both RecipeList and RecipeListItem from this file

// RecipeList renders a bootstrap list item
export function TrailList({ children }) {
  return <ul className="list-group scrollable">{children}</ul>;
}

// RecipeListItem renders a bootstrap list item containing data from the recipe api call
export function TrailListItem({
	id,
	name,
	city,
	region,
	description,
	difficulty,
	features,
	rating,
	thumbnail,
	url,
  	length, 
  	lat, 
  	lon
	// saveTrail,
	// deleteTrail
}) {
	return (
		<div>
			<li className="list-group-item center" id={id}>
				<Row>
					<Col size="xs-2 sm-2">
						<Thumbnail src={thumbnail} />
					</Col>
					<Col size="xs-8 sm-8">
						<h3>Name : {name}</h3>
						<h4>Location : {city}</h4>
						<h5>State : {region} </h5>
					</Col>
					<Col size="xs-2 sm-2">
						<Button type="success" className="input-lg btn-sm ml-2">
							Add Plan
						</Button>
						<Button type="danger" className="input-lg btn-sm ml-2 mt-2">
							Mark as done
						</Button>
						<Button type="primary" className="input-lg btn-sm ml-2 mt-2">
							Add to favorites
						</Button>
					</Col>
				</Row>
				<Row>
					<Col size="xs-12 sm-12">
						<p>Description: {description}</p>
					</Col>
				</Row>
				<Row>
					<Col size="xs-3 sm-3">
						<p>
							Features : <p>{features}</p>
						</p>
					</Col>
					<Col size="xs-3 sm-3">
						<p>
							Difficulty : <span>{difficulty}</span>
						</p>
					</Col>
					<Col size="xs-3 sm-3">
						<p>
							Rating : {rating}
							<span>
								<Ratings rating={Math.round(rating * 10) / 10} widgetRatedColors="brown">
									<Ratings.Widget widgetDimension="20px" />
									<Ratings.Widget widgetDimension="20px" />
									<Ratings.Widget widgetDimension="20px" />
									<Ratings.Widget widgetDimension="20px" />
									<Ratings.Widget widgetDimension="20px" />
								</Ratings>
							</span>
						</p>
					</Col>
					<Col size="xs-3 sm-3">
						<p>
							Distance : <span>{length}ml </span>
						</p>
					</Col>
				</Row>
        <Row>     
          <Col size="xs-3 sm-3">
            <div>
            Coordinates:            
            <p>
            Latitude: {lat}
            </p>            
            <p>
            Longitude: {lon}
            </p>
            </div>
          </Col> 
          <Col size="xs-3 sm-3">
            
            <GoogleApiWrapper></GoogleApiWrapper>  
            
          </Col>               
        </Row>
			</li>
		</div>
	);
}

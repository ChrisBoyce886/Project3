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
	lon,
	handleAdd
	// saveTrail,
	// deleteTrail
}) {
	return (
		<div id="results-container">
			<li className="list-group-item center" id={id}>
				<Row>
					<Col size="xs-2 sm-2">
						<Thumbnail src={thumbnail} />
					</Col>
					<Col size="xs-6 sm-6">
						<h3>{name}</h3>
						<br />
						<h5>City: {city}</h5>
						<h5>State: {region} </h5>
					</Col>

					<Col size="xs-4 sm-4">
						<button
							className="btn btn-info"
							id="collapseBtn"
							data-toggle="collapse"
							href={`#multiCollapseExample1${id}`}
							role="button"
							aria-expanded="false"
							aria-controls="multiCollapseExample1"
						>
							<span id="collapseBtnText">View Trail Information</span>
						</button>
					</Col>
				</Row>
				<div class="collapse multi-collapse" id={`multiCollapseExample1${id}`}>
					<br />
					<Row>
						<Col size="xs-10 sm-10">
							<p>
								Trail Description: <br />
								{description}
							</p>
						</Col>

						<Col size="xs-2 sm-2">
							<Button
								type="success"
								className="input-lg btn-sm ml-2"
								onClick={handleAdd.bind(this, name, city, region, rating, length, url)}
							>
								Add Plan
							</Button>
							<Button type="danger" className="input-lg btn-sm ml-2 mt-2">
								Mark as done
							</Button>
							<Button type="primary" className="input-lg btn-sm ml-2 mt-2 favorites">
								Add to favorites
							</Button>
						</Col>
					</Row>

					<Row>
						<Col size="xs-3 sm-3">
							<p>
								<u>Rating: </u>
								<br />
								{rating} <br />
								<span id="rating-stars">
									<Ratings rating={Math.round(rating * 10) / 10} widgetRatedColors="brown">
										<Ratings.Widget widgetDimension="20px" />
										<Ratings.Widget widgetDimension="20px" />
										<Ratings.Widget widgetDimension="20px" />
										<Ratings.Widget widgetDimension="20px" />
										<Ratings.Widget widgetDimension="20px" />
									</Ratings>
								</span>
							</p>

							<p>
								<u>Trail Difficulty:</u> <br />
								<span>{difficulty}</span>
							</p>

							<p>
								<u>Trail Distance:</u> <br />
								<span>{length} mi. </span>
							</p>

							<p>
								<u>Features:</u> <br />
								<p>{features}</p>
							</p>
						</Col>

						<Col size="xs-9 sm-9">
							<GoogleApiWrapper lat={lat} lng={lon} />
						</Col>
					</Row>

					{/* <Col size="xs-3 sm-3">
					<div>
					Coordinates:            
					<p>
					Latitude: {lat}
					</p>            
					<p>
					Longitude: {lon}
					</p>
					</div>
				</Col>  */}
				</div>
			</li>
		</div>
	);
}

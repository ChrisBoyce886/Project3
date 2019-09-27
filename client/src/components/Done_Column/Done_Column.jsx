import React from 'react';
import {
	// Container,
	Row,
	Col
} from '../Grid';
import './style.css'


const Done_Column = (props) => {
	return (
		
<div id="done-container">	
	<h3 className="text-center" id="profileHeader">Completed Trails</h3>	
</div>	
		/* <li className="list-group-item center" id={id}>
			<Row>			
				<Col size="xs-4 sm-4">
					<h3>{name}</h3><br></br>
					<h5>City: {city}</h5>
					<h5>State: {region} </h5>
				</Col>	
		
				<Col size="xs-4 sm-4">
					<button className="btn btn-info" id="collapseBtn" data-toggle="collapse" href={`#multiCollapseExample1${id}`} role="button" aria-expanded="false" aria-controls="multiCollapseExample1">
						<span id="collapseBtnText">View Trail Information</span>
					</button>
				</Col>
			</Row>

				<div class="collapse multi-collapse" id={`multiCollapseExample1${id}`}>
				<br></br>

			<Row>						
				<Col size="xs-10 sm-10">
					<p>Trail Description: <br></br>{description}</p>
				</Col>
			</Row>

			<Row>
				<Col size="xs-3 sm-3">
					<p>
						<u>Rating:  </u><br></br>{rating} <br></br>							
					</p>
					<p>
						<u>Trail Difficulty:</u> <br></br> 
						<span>{difficulty}</span>
					</p>

					<p>
						<u>Trail Distance:</u> <br></br>
						<span>{length} mi. </span>
					</p>

					<p>
						<u>Features:</u> <br></br>
						<p>{features}</p>
					</p>
				</Col>	
			</Row>
				</div>
		</li>
</div> */
	)
};

export default Done_Column;

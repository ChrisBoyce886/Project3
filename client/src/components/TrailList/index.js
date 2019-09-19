import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";
import Button from "../Button"
import "./style.css"
// Exporting both RecipeList and RecipeListItem from this file

// RecipeList renders a bootstrap list item
export function TrailList({ children }) {
  return <ul className="list-group">{children}</ul>;
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
  length
  // saveTrail,
  // deleteTrail
}) {
  return (
    <li className="list-group-item center" id={id}>
       
        <Row>
        <Col size="xs-2 sm-2">
            <Thumbnail src={thumbnail} />
          </Col>
        <Col size="xs-5 sm-5">
          <h3>Name : {name}</h3>
            <h4>City :  {city}</h4>
             <h5>State : {region} </h5>
            </Col>
            <Col size="xs-5 sm-5">
          <h3>Features : <p>{features}</p></h3>
            <h4>Difficulty :  <p>{difficulty}</p></h4>
             <h5>Rating : <p>{rating} </p></h5>
            </Col>
            </Row>
            <Row>
            <Col size="xs-4 sm-8">
            <p></p>
            </Col>
         
          <Col size="xs-12 sm-12">
            <p>Description: {description}</p>       
          </Col>
        </Row>
    </li>
  );
}

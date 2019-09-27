import React from 'react';
import GoogleApiWrapper, { MapContainer } from '../../components/GoogleMapsAPI/GoogleMap';
import style from "./style.css"

function AboutUs() {
    return (
        <div className="card" id="aboutus-card">
            <h1 className="card-header" id="aboutus-header">We are Earth Trek</h1>
            <div className="card-body about-us-container">                
                <p>Earth Trek is your one stop source of information for Hiking and Biking trails across the U.S.! Type in any U.S. city and get hiking and biking trail listings within 50 miles of that location.</p>
                <p>Information for each trail includes its Name, Location, Map, a Description of the trail(s), Trail Difficulty level, Trail Distance, Hiker Rating/Reviews, and any Trail Features.</p>
                <p>The website is implemented using React, Node.js, and several NPM packages which use a MySQL database to hold and pull data from. The trail information comes via an API for a national trail database called Trail API from RapidAPI.com. We also incorporated a Google Maps API to display each trails location.</p>
                <p> Creators: Sean Nguyen, Bohdan Dziubliuk, Christopher Boyce</p>
                <a href="https://github.com/ChrisBoyce886/Project3" target="blank" id="github-link">Github Link</a>
            </div>        
        </div>

    )
};

export default AboutUs;

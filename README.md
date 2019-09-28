# EARTH TREK

*Earth Trek* is your one stop source of information for Hiking and Biking trails across the U.S.! Type in any U.S. city and get hiking and biking trail listings within 50 miles of that location. Information for each trail includes its Name, Location, Map, a Description of the trail(s), Trail Difficulty level, Trail Distance, Hiker Rating/Reviews, and any Trail Features.

The application is implemented using [React](https://reactjs.org/), [Node.js](https://nodejs.org/en/docs/), and several NPM packages which use a [MySQL](https://www.mysql.com/) database to hold and pull data from. The trail information comes via an API for a national trail database called [Trail API](https://rapidapi.com/trailapi/api/trailapi) from RapidAPI.com. We also incorporated a [Google Maps API](https://www.npmjs.com/package/google-map-react) to display each trails location. 

Click [here](https://earth-trek.herokuapp.com/) to view the application!


## Installation / Deployment

1. Clone this repo - https://github.com/ChrisBoyce886/Project3.git
2. Download then Open [MySQL Workbench](https://www.mysql.com/)
3. Copy and paste the code from [`schema.sql`](server/db/schema.sql) into your MySQL Server and *execute* code to create your database.
4. Open [`config.json`](server/config/config.json) and replace username and password with your personal MySQL Server information. 
5. Run `npm install` command from the root directory.
6. Set the `PORT` environment variable within [`server.js`](server.js) file to the number of your choice. `3000` is set as the default. 
Example: `var PORT = process.env.PORT || 3000`
7. Run `npm start` command from the root directory
   * If your app does not automatically open in your default browser, Navigate to your browser and enter `localhost:3000`(Or your preferred PORT number)
   * Npm start runs the app in the development mode.
   * The page will reload if you make edits. You will also see any lint errors in the console.
   * The `npm test` command launches the test runner in the interactive watch mode.


## Design Notes

* The user has the ability to view only basic information, unless they create an account and login using their account credentials. 
* Once logged in, the user has full access to the application and all information for each trail search. 
* The Trail API holds name, location, descriptions, trail difficulty levels, trail distance, hiker ratings, and any trail features information which we pull into a MySQL database and then display each result to the screen after the user inputs a location. 
* Google Maps API takes in the coordinates information from the Trails API results and displays a map for each trail result with that trail being centered on its map, marked, and zoomed in depending on the size/distance of that trail.
* The user can add a trail that they are interested in to their 'Favorites List' or can mark an already completed trail as 'Done'. 
* Both favorited and completed trails will appear in their personal account.


## Demonstration gif:

* This gif demonstrates how to sign up, log in, seacrh for a location, it shows the results for Charlotte, NC, and finally this gif demonstrates how to view each trail information which inlcudes a trail decription, rating, difficulty, trail distance, and a map. 
   
![Earth-Trek](client/public/earth-trek.gif "earthtrek.gif")
  
        
## Built With

* [React](https://reactjs.org/)
* [MySQL](https://www.mysql.com/)
* [Trail API from RapidAPI.com](https://rapidapi.com/trailapi/api/trailapi)
* [Google Maps API](https://www.npmjs.com/package/google-map-react)
* [Node.js](https://nodejs.org/en/docs/)
* JavaScript
* [Bootstrap 4](https://getbootstrap.com/)
* CSS3
* HTML5
* Application deployed with [Heroku](https://www.heroku.com)


**NPM Packages:**

* [Axios](https://www.npmjs.com/package/axios)
* [BCrypt](https://www.npmjs.com/package/bcrypt)
* [BCrypt-JS](https://www.npmjs.com/package/bcryptjs)
* [Dotenv](https://www.npmjs.com/package/dotenv)
* [Express](https://www.npmjs.com/package/express)
* [Express-session](https://www.npmjs.com/package/express-session)
* [Google-Maps-React](https://www.npmjs.com/package/google-map-react)
* [If-env](https://www.npmjs.com/package/if-env)
* [Morgan](https://www.npmjs.com/package/morgan)
* [Mysql2](https://www.npmjs.com/package/mysql2)
* [Passport](https://www.npmjs.com/package/passport)
* [Passport-Local](https://www.npmjs.com/package/passport-local)
* [Path](https://www.npmjs.com/package/path)
* [React-Ratings-Declarative](https://www.npmjs.com/package/react-ratings-declarative)
* [React-Router-Dom](https://www.npmjs.com/package/react-router-dom)
* [React-Star-Ratings](https://www.npmjs.com/package/react-star-ratings)
* [Sequelize](https://www.npmjs.com/package/sequelize)


## Authors

* Sean Nguyen
* Bohdan Dziubliuk
* Christopher Boyce


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


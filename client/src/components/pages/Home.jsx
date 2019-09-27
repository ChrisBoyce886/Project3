import React from 'react'
import SearhBar from '../SearchBar/SearchBar'
import '../Main_styles/style.css'

function Home(props) {
    console.log('mark it',SearhBar.state)
    console.log(props.authToken)
    console.log(props)
    return (
        <div className="main_container">
            <SearhBar authToken={props.authToken}>
            </SearhBar>
        </div>
    )
   
};

export default Home;

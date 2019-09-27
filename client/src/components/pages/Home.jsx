import React from 'react'
import SearhBar from '../SearchBar/SearchBar'
import '../Main_styles/style.css'

function Home() {
    console.log('mark it',SearhBar.state)
    return (
        <div className="main_container">
            <SearhBar>
            </SearhBar>
        </div>
    )
   
};

export default Home;

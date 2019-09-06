import React from 'react'

function Navbar() {
    return (
        <div>
            <nav className="navbar sticky-top navbar-dark bg-dark">
                <a className="navbar-brand" href="#">Earth Trek</a>
                <ul className="nav justify-content-end">
                    <li className="nav-item">
                        <a className="nav-link active" href="">About Us</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" href="">Log In</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" href="">Sign Up</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
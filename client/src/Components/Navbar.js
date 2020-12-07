import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
    return (
        <ul className="links">
             < Link to="/" >
                <li>HOME</li>
            </Link>

            < Link to="/start">
                <li>GET STARTED</li>
            </Link>

            < Link to="/about">
                <li>ABOUT THE CURATOR</li>
            </Link>
        </ul>
    );
}
 

export default Navbar;
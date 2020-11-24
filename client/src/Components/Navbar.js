import React, { Component } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <ul className="links">
             < Link to="/" >
                <li>HOME</li>
            </Link>

            < Link to="/about">
                <li>GET STARTED</li>
            </Link>
        </ul>
        );
}
 

export default Navbar;
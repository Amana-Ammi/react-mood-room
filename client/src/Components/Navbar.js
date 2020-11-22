import React, { Component } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <ul className="links">
             < Link to="/" >
                <li>HOME</li>
            </Link>

            < Link to="/about">
                <li>ABOUT</li>
            </Link>

            <Link to="/blue">
                <li>BLUE ROOM</li>
            </Link>

            <Link to="/red">
                <li>RED ROOM</li>
            </Link>

            <Link to="/red">
                <li>DANCE ROOM</li>
            </Link>
        </ul>
        );
}
 

export default Navbar;
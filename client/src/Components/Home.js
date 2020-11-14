import React from "react";
import './Home.css';
import { Link } from 'react-router-dom';

class Home extends React.Component {
    render(){

        return (

            <div className="home-styling">
              <h1 className="logo">The Mood Room</h1>
              <ul className="links">
                < Link to="/start">
                <li>GET STARTED</li>
                </Link>
              </ul>
            </div>
        );
    }
};

export default Home
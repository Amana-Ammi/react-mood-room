import React, { Component } from 'react';
import './Start.css';


//make this a stateless component

class About extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {  }
    // }
    render() { 
        return ( 
            <div className="start-body">
                <header className="start-pg">How It Works</header>
                <div className="info-box">
                    <h3>The Mood Room was designed to minimize the time it takes you to find a suitable playlist.
                        Here, simply just select a room below based off of our curated moods and get groovin'.
                    </h3>
                </div>
            </div>
         );
    }
}
 
export default About;


import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div>
                <h1 className="logo">The Mood Room</h1>
            </div>
          );
    }
}
 
export default Header;
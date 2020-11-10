import React from "react"
import Navbar from 'react-bootstrap/Navbar'
import img1 from '../images/turntable.png'

class Header extends React.Component {
    render(){

        return (
            <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">
              <img
                alt=""
                src={img1}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{' '}
              React Bootstrap
            </Navbar.Brand>
          </Navbar>
        )
    }
}

export default Header
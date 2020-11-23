import React, { Component } from 'react';
import { Card, Button} from 'react-bootstrap';

class RoomCard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://pilerats.com/assets/Uploads/kehlani-feat-chance-the-rapper.jpg" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
                    
          );
    }
}
 
export default RoomCard;
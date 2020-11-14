import React, { Component } from 'react';
import { Card, CardDeck, Button } from 'react-bootstrap';
import rain from '../images/rain_1.jpg';
import afro from '../images/afro-beat.jpg';
import dance from '../images/dance.jpg'


class RoomCards extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <CardDeck className="card-deck">
                <Card className="overflow">
                    <Card.Img className="card-img" variant="top" src={rain}/>
                    <Card.Body className="card-body">
                    <Card.Title>Rainy Day</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                    </Card.Text>
                    <Button href="#" variant="outline-primary">Listen Now!</Button>
                    </Card.Body>
                </Card>
                <Card className="overflow">
                    <Card.Img className="card-img" variant="top" src={afro} />
                    <Card.Body>
                    <Card.Title>Afro Beatz</Card.Title>
                    <Card.Text>
                        This card has supporting text below as a natural lead-in to additional
                        content.{' '}
                    </Card.Text>
                    <Button href="#" variant="outline-primary">Listen Now!</Button>
                    </Card.Body>
                </Card>
                <Card className="overflow">
                    <Card.Img className="card-img" variant="top" src={dance} />
                    <Card.Body>
                    <Card.Title>Dance</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This card has even longer content than the first to
                        show that equal height action.
                    </Card.Text>
                    <Button href="#" variant="outline-primary">Listen Now!</Button>
                    </Card.Body>
                </Card>
            </CardDeck>
          );
    }
}
 
export default RoomCards;
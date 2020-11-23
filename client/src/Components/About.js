import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchVideos } from '../actions/videos';
import { Link } from 'react-router-dom';
import { CardDeck, Card, Button } from 'react-bootstrap';

import './Card.css';


// Want photos with links to the room and appropriate ID. 
// Possibly remove like and dislike feature from backend

class About extends Component {
    componentDidMount() {
        console.log(this.props.match.params)
        this.props.fetchVideos()

    }

    // handleOnClick() {
    //     // console.log(this.props.match.params.video_id)
    //     let id = this.props.match.params.video_id
    // }


     render() {
        const videos = this.props.videos.map((video, i) =>  
            <CardDeck className="card-deck" >
                <Card className="overflow" style={{ width: '45rem' }}>
                    <Card.Img className="card-img" variant="top" src={video.image_url} />
                    <Card.Body className="card-body"y>
                        <Card.Title>{video.title}</Card.Title>
                        {/* <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text> */}
                        < Link to="/{:video_id}">
                            {/* <Button onClick={(event) => this.handleOnClick(event)} variant="primary">Listen Now</Button> */}
                            <Button variant="primary">Listen Now</Button>
                        </Link>
                    </Card.Body>
                </Card>
            </CardDeck>
            )

        return (
            <div className="container" style={{ padding: '10rem' }} >
                <h2>Pick Your Poison</h2>

                    {this.props.loading ? <h3>Loading.....</h3> : videos}

            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        videos: state.videoReducer.videos,
        loading: state.videoReducer.loading
    }
}
 
export default connect(mapStateToProps, { fetchVideos })(About)


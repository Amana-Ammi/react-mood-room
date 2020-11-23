import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchVideos } from '../actions/videos';
import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom';
import { CardDeck, Card, Button } from 'react-bootstrap';

import './Card.css';


// Want photos with links to the room and appropriate ID. 
// Possibly remove like and dislike feature from backend

class About extends Component {
    componentDidMount() {
        // console.log(this.props.match.params.video_id)
        // console.log(this.handleOnClick())
        this.props.fetchVideos()

    }

    handleOnClick() {
        // console.log(this.props.match.params.video_id)
        let id = this.props.match.params.video_id
    }


     render() {
        const videos = this.props.videos.map((video, i) =>  
         <div>
             <h2>{video.title}</h2>
             <ReactPlayer url={video.vid_url} />
         </div>
            )

        return (
            <div className="container" style={{ padding: '10rem' }} >
                <h2>Now Playing...</h2>

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


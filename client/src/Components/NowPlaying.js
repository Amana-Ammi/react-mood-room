import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchVideos } from '../actions/videos';
import ReactPlayer from 'react-player'

// import { fetchVideos } from '../actions/videos';

import './Card.css';


import { useSelector } from 'react-redux'

// Want photos with links to the room and appropriate ID. 
// Possibly remove like and dislike feature from backend

class NowPlaying extends Component {
    componentDidMount() {
        this.props.fetchVideos()
        // let id = this.props.match.params.video_id
    }

//create Rooms for each Mood.
// this correctly renders a single room based off of the mood
// style each room accordingly.

     render() {
        // let id = this.props.match.params.video_id
        const videos = this.props.videos.map(video => {
            // if (video.mood === "hype") { 
                console.log(this.props.match.params.video_id)
                if (video.id == this.props.match.params.video_id) { 
            //     // let id = this.props.match.params.video_id
            //     // if (video.id === this.props.match.params.video_id) { 
                return ( 
                    <div key={video.id} >
                        <h3>{video.title}</h3>
                        <ReactPlayer url={video.vid_url} />
                    </div> 
                ) 
            } 
        })
       
       

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
 
export default connect(mapStateToProps, { fetchVideos })(NowPlaying)


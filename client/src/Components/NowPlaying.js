import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchVideos } from '../actions/videos';
import ReactPlayer from 'react-player'

import './NowPlaying.css';

class NowPlaying extends Component {
    componentDidMount() {
        this.props.fetchVideos()
        // let id = this.props.match.params.video_id
    }

     render() {
        let id = this.props.match.params.video_id
        const videos = this.props.videos.map(video => {
            // if (video.mood === "hype") { 

                if (video.id == id) { 
                return ( 
                    <div key={video.id} >
                        <h3 className="np-title">{video.title}</h3>
                        <ReactPlayer controls className="video" url={video.vid_url} />
                    </div> 
                ) 
            } 
        })
       
       

        return (
            <div style={{ padding: '20rem' }} >
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
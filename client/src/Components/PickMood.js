import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchVideos } from '../actions/videos';
import { Link } from 'react-router-dom';
import './PickMood.css';


class PickMood extends Component {
    componentDidMount() {
        this.props.fetchVideos()
    }

     render() {
        const videos = this.props.videos.map((video, i) =>  
            <div key={video.id} className="card-deck" style={{ width: '45rem' }} >
                <div className="overflow column" style={{ width: '45rem' }}>
                    <img className="card-img" variant="top" src={video.image_url} />
                    <div className="card-body"y>
                        <h1 className="start-h1">{video.title}</h1>
                            <h4>{video.description}</h4>
                            <p>Mood: {video.mood}</p>
                        {/* Dynamic route working! */}
                        < Link to={`/${video.id}`}>
                            <button className="btn" >Listen Now</button>
                        </Link> 
                    </div>
                </div>
            </div>
            )

        return (
            <div className="container" style={{ padding: '10rem' }} >
                <h2 className="about">Choose Your Mood: </h2>
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
 
export default connect(mapStateToProps, { fetchVideos })(PickMood)


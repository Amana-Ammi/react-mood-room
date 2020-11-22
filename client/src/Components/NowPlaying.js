import React, { Component } from 'react';
// higher level component that connects react to redux
import { connect } from 'react-redux'; 
import { getVideos } from '../actions/videos'
import ReactPlayer from 'react-player';



class NowPlaying extends Component {
    componentDidMount() {
        this.props.getVideos()
    }


     render() {
        const videos = this.props.videos.map((video, i) => <li key={i}>{video.title}</li> )

        return (
            <div>
                <h2>Page</h2>
                <ul>
                    {this.props.loading ? <h3>Loading.....</h3> : videos}
                </ul>
            </div>
        )
    }

    // renderTitles() {
    //     // console.log(this.state.video)
    //     return  (
    //     this.state.video.map(video =>
    //         <div>
    //             <p> {video.title} : {video.mood}</p>
    //             <p> Likes: {video.likes}</p>
    //             <p> Disikes: {video.dislikes}</p>
    //             <ReactPlayer url={video.vid_url}/>
                
    //         </div> 
    //         )
    //     )
    // }

}

const mapStateToProps = state => {
    return {
        videos: state.videoReducer.videos,
        loading: state.videoReducer.loading
    }
}
 
export default connect(mapStateToProps, { getVideos })(NowPlaying)
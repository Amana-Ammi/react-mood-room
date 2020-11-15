import React, { Component } from 'react';

class Api extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: []
          }
    }

    componentDidMount() {
        fetch('/videos')
        .then(resp => resp.json())
        .then(json => this.setState({videos: json}))
        // .then(json => console.log(json))
        .then(json => console.log(this.state.videos.data[0].attributes.title))
        .catch(error => console.log(error))
    }

    renderVideos() {
        const videoArr = videos
        const videoArr = this.state.videoArr.map(video => <h1>{video.title}</h1>);
    }

    render() { 
        return (
            <div>
                {this.renderVideos()}
                {/* <h1> Hello World</h1> */}
            </div>
          );
    }
}
 
export default Api;
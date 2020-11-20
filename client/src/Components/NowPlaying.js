import React, { Component } from 'react';
import ReactPlayer from 'react-player';


class NowPlaying extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            video: []
        }
        this.renderTitles = this.renderTitles.bind(this)
    }

    componentDidMount() {
        this.setState({loading: true})
        fetch('http://localhost:3001/api/v1/videos')
            .then(resp => resp.json())
            .then(data => {
                
                //  console.log(data)
                // console.log(data.data[1].attributes.title)
                this.setState({
                    isLoading: false,
                    video: data
                })
            })
    }

    renderTitles() {
        // console.log(this.state.video)
        return  (
        this.state.video.map(video =>
            <div>
                <p> {video.title} : {video.mood}</p>
                <ReactPlayer url={video.vid_url}/>
            </div> 
            )
        )
    }

    render() { 
        return (
            <div>
                {/* <p>{console.log(this.renderTitles())}</p> */}
                {this.state.isLoading ? <h3>Wait for it..</h3> : <h1>{this.renderTitles()}</h1> }
            </div>
            
          );
    }
}
 
export default NowPlaying;

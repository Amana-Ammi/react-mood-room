export const fetchVideos = () => {
   
    return dispatch => {
        dispatch({type: "LOADING_VIDEOS"})
        fetch('http://localhost:3001/api/v1/videos')
            .then(resp => resp.json())
            .then(videos => dispatch({type: "VIDEOS_LOADED", payload: videos}))
    }
}
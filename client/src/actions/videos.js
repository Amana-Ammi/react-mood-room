export const fetchVideos = () => {
   
    return dispatch => {

    // returns a function that takes in dispatch
    // first dispatch starts the process of sending the fetch, 
    // when that is done it fires off another dispatch 
    // This says my reducer needs to be prepared for two different things.

        dispatch({type: "LOADING_VIDEOS"})
        fetch('http://localhost:3001/api/v1/videos')
        .then(resp => resp.json())
        .then(videos => dispatch({type: "VIDEOS_LOADED", payload: videos}))
    }
}
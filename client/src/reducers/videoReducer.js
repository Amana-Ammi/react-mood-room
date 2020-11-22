export default (state = { videos: [], loading: false}, action) => {
    switch(action.type){ 
        case "LOADING_VIDEOS":
            return {
                ...state,
                loading:true
            }
        
        case "VIDEOS_LOADED":
            return {
                ...state,
                videos: action.payload,
                loading:false
            }

        default:
            return state 
    }
}
export default (state = { videos: [], loading: false}, action) => {
    switch(action.type){ 
        // this tells me it fired off and is fetching 
        case "LOADING_VIDEOS":
            return {
                ...state,
                loading:true
            }
        // Once we change state, the component will rerender 
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
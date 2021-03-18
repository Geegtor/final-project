const DefaultState = {
    loading: false,
    data: [],
    errorMsg: ""
};

const PokemonCaughtListReducer = ( state = DefaultState, action) => {
    switch (action.type){
        case "CAUGHT_LIST_LOADING":
            return {
                ...state,
                laoding: true,
                errorMsg: ""
            }

        case "CAUGHT_LIST_FAIL":
            return {
                ...state,
                laoding: false,
                errorMsg: "unable to find"
            }

        case "CAUGHT_LIST_SUCCESS":
            return {
                ...state,
                laoding: false,
                errorMsg: "",
                data: action.payload
            }
            
            default:
                return state
    }
}

export default PokemonCaughtListReducer
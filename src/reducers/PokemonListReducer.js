const DefaultState = {
    loading: false,
    errorMsg: "",
    data: []
};

const PokemonListReducer = (state = DefaultState, action) => {
    switch (action.type) {
        case "POKEMON_LIST_LOADING":
            return {
                ...state,
                loading: true,
            };
        
        case "POKEMON_LIST_FAIL":
            return {
                ...state,
                loading: false,
                errorMsg: "Failed Laoding"
            };
        
        case "POKEMON_LIST_SUCCESS":
            return {
                ...state,
                loading: false,
                errorMsg: "",
                data: action.payload
            };
        default:
            return state
    }
}

export default PokemonListReducer
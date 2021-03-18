const DefaultState = {
    loading: false,
    data: {},
    errorMsg: ""
};

const PokemonMultipleReducer = ( state = DefaultState, action) => {
    switch (action.type){
        case "POKEMON_MULTIPLE_LOADING":
            return {
                ...state,
                laoding: true,
                errorMsg: ""
            }

        case "POKEMON_MULTIPLE_FAIL":
            return {
                ...state,
                laoding: false,
                errorMsg: "unable to find"
            }

        case "POKEMON_MULTIPLE_SUCCESS":
            return {
                ...state,
                laoding: false,
                errorMsg: "",
                data: {
                    ...state.data,
                    [action.pokemonName]: action.payload
                }
            }

        case 'CATCH':
			const pokemons = [ ...state.data ];
            console.log(pokemons);
			const index = pokemons.findIndex((Pokemon) => Pokemon.id === action.id);
			pokemons[index].caught = true;
			pokemons[index].caughtDate = new Date().toLocaleString();

			return {
				...state,
				pokemons: [ ...pokemons ],
				caughtPokemons: [ ...pokemons ].filter((pokemon) => pokemon.caught === true)
			};
            
            default:
                return state
    }
}

export default PokemonMultipleReducer
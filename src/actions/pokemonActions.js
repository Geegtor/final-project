import axios from "axios";

const CatchPokemon = () => () => {

};    


export const GetPokemonList = (page) => async dispatch => {
    try {
        dispatch({
            type: "POKEMON_LIST_LOADING"
        });

        const perPage = 15;        
        const res = await axios.get(`http://localhost:3004/pokemons?_page=${page}&_limit=${perPage}`)

        dispatch({
              type: "POKEMON_LIST_SUCCESS",
              payload: res.data
        })

    } catch (e) {
          dispatch({
            type: "POKEMON_LIST_FAIL"
        })
    }
};

export const GetPokemonCaughtList = () => async dispatch => {
    try {
        dispatch({
            type: "CAUGHT_LIST_LOADING"
        });
      
        const res = await axios.get(`http://localhost:3004/pokemons?cought=Cought`)

        dispatch({
              type: "CAUGHT_LIST_SUCCESS",
              payload: res.data
        })

    } catch (e) {
          dispatch({
            type: "CAUGHT_LIST_FAIL"
        })
    }
};

export const GetPokemon = (pokemon) => async dispatch => {

    try {
        dispatch({
            type: "POKEMON_MULTIPLE_LOADING"
        });
        
        const res = await axios.get(`http://localhost:3004/pokemons?name=${pokemon}`)

        dispatch({
              type: "POKEMON_MULTIPLE_SUCCESS",
              payload: res.data,
              pokemonName: pokemon
        })

    } catch (e) {
          dispatch({
            type: "POKEMON_MULTIPLE_FAIL"
        })
    }
};

export const catchPok = (id) => async dispatch =>({
	type: 'CATCH',
	id: id
});

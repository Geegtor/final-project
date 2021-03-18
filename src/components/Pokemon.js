import _ from "lodash";
import React, { useCallback } from "react";
import {useDispatch, useSelector} from "react-redux";
import { GetPokemon, catchPok } from "../actions/pokemonActions";

const Pokemon = (props) => { 
    const pokemonName = props.match.params.pokemon;
    const dispatch = useDispatch();
    const pokemonState = useSelector( state => state.Pokemon )  
    console.log(pokemonState);
    React.useEffect(  () => {
         dispatch(GetPokemon(pokemonName))
    }, []) 
    const handler = useCallback( () => {
        dispatch(catchPok(pokemonState.data[pokemonName]));
    }, [])

    const ShowData = () => {
        if (!_.isEmpty(pokemonState.data[pokemonName])) {
            const pokeData = pokemonState.data[pokemonName];
            console.log(pokeData);
            
            return pokeData.map(el => {
                return <div className="pokemon-card pokemons " key={el.id}>                             
                            <div className = "pokemon-card__image">
                                <img src={`/Img/${el.id}.png`}/>
                            </div>
                            <p>#{el.id}</p>
                            <button  onClick={handler}>
                                Catch
                            </button>
                        </div>
            })
        }

        if (pokemonState.loading) {
            return <p>Loading . . .</p>
            
        }

        if (pokemonState.errorMsg !== "") {
            return <p>{pokemonState.errorMsg}</p>
        }

        return <p> unable to get data </p>
    };
    
    return (
        <>
            <div>{pokemonName}</div>
            <div>{ShowData()}</div>
        </>
    )
};

export default Pokemon
import _ from "lodash";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetPokemonCaughtList } from "../actions/pokemonActions";
import { Link } from "react-router-dom";
import "./PokemonList.scss"

const PokemonCaughtList = () => {
    const dispatch = useDispatch();
    const pokemonCaughtList = useSelector(state => state.PokemonCaughtList);

    React.useEffect(() => {
        FetchData();
    }, []);

    const FetchData = () => {
        dispatch(GetPokemonCaughtList())
    }

    const ShowData = () => {
        if (pokemonCaughtList.loading) {
            return <p>Loading . . .</p>
            
        }

        if (!_.isEmpty(pokemonCaughtList.data)) {
            return pokemonCaughtList.data.map(el => {
                return <div className="pokemon-card pokemons " key={el.id}>
                            <div className = "pokemon-card__image">
                                <img src={`/Img/${el.id}.png`}/>
                            </div>
                            <p>{el.name}</p>
                            <p>{el.id}</p>
                            <p>{el.cought}</p>
                            <button>
                                <Link to={`/pokemon/${el.name}`}>View</Link>
                            </button>
                        </div>
            })
        }

        if (pokemonCaughtList.errorMsg !== "") {
            return <p>{pokemonCaughtList.errorMsg}</p>
        }

        return <p> Unable to get data </p>
    };

    return (
        <>
            <div  className="row">
                {ShowData()}
            </div>
        </>
    )
};

export default PokemonCaughtList  
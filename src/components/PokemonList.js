import React from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { GetPokemonList } from "../actions/pokemonActions";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import "./PokemonList.scss"

const PokemonList = () => {
    const dispatch = useDispatch();
    const pokemonList = useSelector(state => state.PokemonList);

    React.useEffect(() => {
        FetchData(1);
    }, []);

    const FetchData = (page = 1) => {
        dispatch(GetPokemonList(page))
    }

    const ShowData = () => {
        if (pokemonList.loading) {
            return <p>Loading . . .</p>
            
        }

        if (!_.isEmpty(pokemonList.data)) {
            return pokemonList.data.map(el => {
                return <div className="pokemon-card pokemons left" key={el.id}>
                            <div className = "pokemon-card__image">
                                <img src={`/Img/${el.id}.png`}/>
                            </div>
                            <p>{el.name}</p>
                            <p>{el.id}</p> 
                            <button>
                                <Link to={`/pokemon/${el.name}`}>View</Link>
                            </button>
                        </div>
            })
        }

        if (pokemonList.errorMsg !== "") {
            return <p>{pokemonList.errorMsg}</p>
        }

        return <p> unable to get data </p>
    };

    return (
        <>
            <div>
            {(!_.isEmpty(pokemonList.data)) && (
                <ReactPaginate
                    pageCount={Math.ceil(720 / 15)}
                    pageRangeDisplayed={2}
                    marginPagesDisplayed={1}
                    onPageChange={(data) => FetchData(data.selected + 1)}
                    containerClassName={"pagination"}
                />
            )}
            </div>
            <div  className="row">
                {ShowData()}
            </div>
        </>
    )
};

export default PokemonList  
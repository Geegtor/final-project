import { combineReducers } from "redux";
import PokemonListReducer from "./PokemonListReducer";
import PokemonMultipleReducer from "./PokemonMultipleReducer";
import PokemonCaughtListReducer from "./PokemonCaughtListReducer"


const RootReducer = combineReducers({
  PokemonCaughtList: PokemonCaughtListReducer,
  PokemonList: PokemonListReducer,
  Pokemon: PokemonMultipleReducer
});

export default RootReducer
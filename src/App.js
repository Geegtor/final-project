import { Switch, Route, NavLink, Redirect } from "react-router-dom";

import PokemonCaughtList from './components/PokemonCaughtList';
import PokemonList from './components/PokemonList';
import Pokemon from './components/Pokemon';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header>
        <span>Pokedex</span>
      </header>
      <nav>
        <NavLink to={"/"}>All Pokemons</NavLink>
        <NavLink to={"/collection"}>Catched Ones</NavLink>
      </nav>
      <section className="container">
        <div>
          <Switch>
            <Route path={ "/" } exact component={PokemonList} />
            <Route path={ "/pokemon/:pokemon" } exact component={Pokemon} />
            <Route path={"/collection"} exact component={PokemonCaughtList} />
            <Redirect to={ "/" }/>
          </Switch>
        </div>
      </section>

    </div>
  );
}

export default App;

import React from 'react';
import Logo from './Logo';
import CaughtPokemon from './CaughtPokemon';
import BestPokemonFetcher from './BestPokemonFetcher';

function App () {
  function logWhenClicked () {
    console.log ('hi');
  }
  return (
    <div>
      <Logo handleClick={logWhenClicked} appName="pokedex" />
      <BestPokemonFetcher />
      <CaughtPokemon />
    </div>
  );
}

export default App;

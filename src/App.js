import React from 'react';
import Logo from './Logo';
import CaughtPokemon from './CaughtPokemon';
import BestPokemon from './BestPokemon';

function App () {
  function logWhenClicked () {
    console.log ('hi');
  }
  return (
    <div>
      <Logo handleClick={logWhenClicked} appName="pokedex" />
      <BestPokemon />
      <CaughtPokemon />
    </div>
  );
}

export default App;

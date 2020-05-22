import React from 'react';
import Logo from './Logo';
import CaughtPokemon from './CaughtPokemon';
import BestPokemon from './BestPokemon';

function App () {
  return (
    <div>
      <Logo appName="pokedex" />
      <BestPokemon />
      <CaughtPokemon />
    </div>
  );
}

export default App;

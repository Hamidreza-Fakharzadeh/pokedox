import React from 'react';
function Logo () {
  let appName = 'pokedex';
  return (
    <header>
      <h1>Welcome to the {appName}</h1>
      <img
        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
        alt="log"
      />
    </header>
  );
}

export default Logo;

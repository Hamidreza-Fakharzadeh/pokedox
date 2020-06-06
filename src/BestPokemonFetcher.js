import React, {useState} from 'react';

let BestPokemonFetcher = () => {
  const [pokemon, setPokemon] = useState (null);
  return
};
let BestPokemon = () => {
  let abilities = ['Anticipation', 'Adaptability', 'Run-Away'];
  return (
    <div>
      <p>My favourite Pokemon is Squirtle</p>
      <ul>
        {abilities.map ((name, index) => {
          return <li key={index}>{name}</li>;
        })}

      </ul>

    </div>
  );
};

export default BestPokemonFetcher;

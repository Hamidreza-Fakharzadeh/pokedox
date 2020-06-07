import React, {useState, useEffect} from 'react';
import BestPokemon from './BestPokemon'

let BestPokemonFetcher = () => {
  const [pokemon, setPokemon] = useState (null);

  useEffect(() => {
      fetch("https://pokeapi.co/api/v2/pokemon/1/")
      .then(response => response.json())
      .then((data) => {
      setPokemon(data)
     })
  },[]);
  if(!pokemon) {
    return <p>loading</p>

  }
  return <BestPokemon pokemon={pokemon}/>


}

export default BestPokemonFetcher;

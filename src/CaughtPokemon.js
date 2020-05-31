import React, {useState} from 'react';

let CaughtPokemon = () => {
  let date = new Date ().toLocaleDateString ();
  const [totalCaught, setTotalCaught] = useState (0);

  function increment () {
    setTotalCaught (totalCaught);
  }

  return (
    <div>
      <p>Caught {totalCaught} Pokemon on{date}</p>;
      <button onClick={increment} />
    </div>
  );
};

export default CaughtPokemon;

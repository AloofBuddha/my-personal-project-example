import { useState } from "react";

function App() {
  const [pokemonTeamSize, setPokemonTeamSize] = useState(0);

  return (
    <div>
      <button onClick={() => setPokemonTeamSize((count) => count + 1)}>
        pokemonTeamSize is {pokemonTeamSize}
      </button>
    </div>
  );
}

export default App;

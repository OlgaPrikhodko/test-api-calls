import { useState, useEffect } from "react";
import "./App.css";

const App: React.FC = () => {
  const [swCharacter, setSwCharacter] = useState();

  const getCharacters = async () => {
    const apiResponse = await fetch(`https://swapi.dev/api/people/4`);
    const json = await apiResponse.json();
    setSwCharacter(json.name);
  };

  useEffect(() => {
    getCharacters();
  });

  return (
    <div className="App">
      <header className="App-header">SWAPI - The Star Wars API</header>
      {swCharacter && (
        <p>Fourth Person from the Star War People - {swCharacter}</p>
      )}
    </div>
  );
};

export default App;

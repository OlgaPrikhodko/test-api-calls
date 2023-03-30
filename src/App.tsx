import "./App.css";
import { useFetchData } from "./hooks/useFetchData";
import { API_BASE_URL } from "./config/config";
import { Character, StarWarsCharacter } from "./components/StarWarsCharacter";
import { outputFetchResult } from "./utils/outputFetchResults";

const App: React.FC = () => {
  const { data, error, isFetching, status } = useFetchData<Character>(
    `${API_BASE_URL}/people/4/`
  );

  return (
    <div className="App">
      <header className="App-header">SWAPI - The Star Wars API</header>
      {isFetching && "Loading..."}
      {!isFetching && (
        <>
          {outputFetchResult(status, error, data, data => (
            <StarWarsCharacter name={data.name} />
          ))}
        </>
      )}
    </div>
  );
};

export default App;

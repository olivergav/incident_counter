import './App.css';
import {CharacterList} from "./components/CharacterList";
import {endpoint} from "./endpoint";
import useFetch from "./hooks/useFetch";
import SearchCharacters from "./components/SearchCharacters";


const formatData = (response) => response?.characters || [];

function App() {
    const [characters, dispatch, loading, error] = useFetch(endpoint + '/characters', formatData)

    return (
        <div className="App">
            <header>
                <h1>Star Wars Characters</h1>
            </header>
            <div>
                <SearchCharacters dispatch={dispatch}/>
            </div>
            <main>
                <section>
                    {loading ? (
                        <p>Loading...</p>
                    ) : (
                        <CharacterList characters={characters}/>
                    )}
                    {error && <p>{error.message}</p>}
                </section>
            </main>
        </div>
    );
}

export default App;

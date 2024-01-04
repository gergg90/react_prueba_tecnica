import "./app.css";
import useCatImage from "./hooks/useCatImage"
import useCatFact from "./hooks/useCatFact"


function App() {

  const { fact, refreshFact } = useCatFact();
  const { image } = useCatImage({ fact });

  const handleClick = async () => {
    refreshFact()
  };

  return (
    <main>
      <h1>App Cats.</h1>
      {fact && <p>{fact}</p>}
      {image && <img src={image} alt="cat" />}
      <button className="btn primary" onClick={handleClick}>
        Refresh
      </button>
    </main>
  );
}

export default App;

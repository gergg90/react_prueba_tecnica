import React from "react";
import "./app.css";
import { useState, useEffect } from "react";

const CAT_ENDPOINT_RANDOM_CAT = "https://catfact.ninja/fact";
// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`;

function App() {
  const [fact, setFact] = useState();
  const [image, setImage] = useState();

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_CAT)
      .then((res) => res.json())
      .then((data) => {
        const { fact } = data;
        setFact(fact);

        //maneras de recuerar la primera palabra
        const threeFirstWords = fact.split(" ", 3).join(" ");
        console.log(threeFirstWords);
        // const firstWord = fact.split(" ").slice(0, 3).join(" ");

        const imageUrl = `https://cataas.com/cat/says/${threeFirstWords}?fontSize=50&fontColor=teal`;

        setImage(imageUrl);
      });
  }, []);

  return (
    <main>
      <h1>App Cats.</h1>
      {fact && <p>{fact}</p>}
      {image && <img src={image} alt="cat" />}
    </main>
  );
}

export default App;

import { useState, useEffect } from "react";

function useCatImage({ fact }) {  
  const [image, setImage] = useState();

  useEffect(() => {
    if (!fact) return;

    const threeFirstWords = fact.split(" ", 3).join(" ");
    //const firstWord = fact.split(" ").slice(0, 3).join(" ");

    const imageUrl = `https://cataas.com/cat/says/${threeFirstWords}?fontSize=50&fontColor=teal`;

    setImage(imageUrl);
  }, [fact]);

  return { image };
}

export default useCatImage;

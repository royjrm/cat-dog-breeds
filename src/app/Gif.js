import React, { useEffect, useState } from "react";

export const Gif = () => {
  const catFactsUrl = "https://catfact.ninja/";
  const GIPHY_KEY = "2IfcQSPvUMV7pBYJdOi7dIopv2Zprf7i";
  const giphyUrl = "https://api.giphy.com/v1/gifs/search?";
  const [catFact, setCatFact] = useState("");
  const [gifs, setGifs] = useState([]);
  const [gifIndex, setGifIndex] = useState(0);

  useEffect(() => {
    fetch(`${catFactsUrl}fact`)
      .then((res) => res.json())
      .then((json) => {
        setCatFact(json.fact);
        const query = json.fact.split(" ", 5).join(" ").trim();
        console.log(query);

        fetch(`${giphyUrl}api_key=${GIPHY_KEY}&q=${query}`)
          .then((res) => res.json())
          .then((json) => {
            setGifs(json.data);
          });
      });
  }, []);

  const onNextGifClick = () => {
    setGifIndex(gifIndex + 1);
  };

  return (
    <div style={{ display: "flex" }}>
      <p>Cat Fact: {catFact}</p>
      <button onClick={onNextGifClick}>Next Gif</button>
      <img
        src={gifs[gifIndex]?.images?.original?.url}
        alt={gifIndex}
        width="300px"
      />
    </div>
  );
};

import React, { useEffect, useState } from "react";

export const Breeds = () => {
  const CAT_API_KEY =
    "live_10Fm960XtP6N57W6V53RQDA5gKZSPSCZ2rTpRxVKY8BAGaGTbjsJ0OBiLvg853DT";

  const [index, setIndex] = useState(0);
  const [breedImages, setBreedImages] = useState([]);

  useEffect(() => {
    fetch("https://api.thecatapi.com/v1/breeds", {
      headers: { "x-api-key": CAT_API_KEY }
    })
      .then((res) => res.json())
      .then((json) => {
        setBreedImages(json);
      });
  }, []);

  const onNextClicked = () => {
    index === breedImages.length - 1 ? setIndex(0) : setIndex(index + 1);
  };
  const onPrevClicked = () => {
    index === 0 ? setIndex(breedImages.length - 1) : setIndex(index - 1);
  };

  return (
    <div id="card">
      <h1>{breedImages[index]?.name}</h1>

      <div className="image-crop">
        <img
          id="avatar"
          src={breedImages[index]?.image?.url}
          alt={`cat-${index}-${breedImages[index]?.name}`}
        />
      </div>

      <div id="bio">
        <p>{breedImages[index]?.description}</p>
        <br />

        <p>
          <span style={{ fontWeight: "bold" }}>Temperament: </span>
          {breedImages[index]?.temperament}
        </p>
      </div>

      <div id="stats">
        <div className="col">
          <p className="stat">{breedImages[index]?.origin}</p>
          <p className="label">Origin</p>
        </div>
        <div className="col">
          <p className="stat">{breedImages[index]?.life_span}</p>
          <p className="label">Life Span</p>
        </div>
      </div>

      <div id="buttons">
        <button onTouchEnd={onPrevClicked} onClick={onPrevClicked}>
          Prev
        </button>
        <button onTouchEnd={onNextClicked} onClick={onNextClicked} id="msg">
          Next
        </button>
      </div>
    </div>
  );
};

import React, { useEffect, useState } from "react";

export const DogBreeds = () => {
  const DOG_API_KEY =
    "live_ElGOAiIzydGAhTeNWMm34bczT7JugnayIFK21NOfAgXBbscXyhfgBUVIe2Fri0Mt";

  const [breeds, setBreeds] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetch("https://api.thedogapi.com/v1/breeds", {
      headers: { "x-api-key": DOG_API_KEY }
    })
      .then((res) => res.json())
      .then((json) => setBreeds(json));
  }, []);

  const onNextClicked = () => {
    index === breeds.length - 1 ? setIndex(0) : setIndex(index + 1);
    console.log(breeds[index]);
  };
  const onPrevClicked = () => {
    index === 0 ? setIndex(breeds.length - 1) : setIndex(index - 1);
    console.log(breeds[index]);
  };

  return (
    <div id="card">
      <h1>{breeds[index]?.name}</h1>
      <div className="image-crop">
        <img
          id="avatar"
          src={breeds[index]?.image?.url}
          alt={`dpg-${index}-${breeds[index]?.name}`}
        />
      </div>

      <div id="bio">
        {breeds[index]?.description && <p>{breeds[index]?.description}</p>}
        <p>
          <span style={{ fontWeight: "bold" }}>Temperament: </span>
          {breeds[index]?.temperament}
        </p>
      </div>

      <div id="stats">
        {breeds[index]?.origin && (
          <div className="col">
            <p className="stat">{breeds[index]?.origin}</p>
            <p className="label">Origin</p>
          </div>
        )}
        <div className="col">
          <p className="stat">{breeds[index]?.life_span}</p>
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

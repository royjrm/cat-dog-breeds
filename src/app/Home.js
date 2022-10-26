import React from "react";
import { DogBreeds } from "../dogs/DogBreeds";
import { Breeds } from "./Breeds";
import { Gif } from "./Gif";

export const Home = () => {
  return (
    <>
      {/* <Gif /> */}
      <Breeds />
      <DogBreeds />
    </>
  );
};

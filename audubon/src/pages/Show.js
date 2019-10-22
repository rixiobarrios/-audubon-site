import React from "react";
import { useParams } from "react-router-dom";

import birdData from "../birdData";

const Show = () => {
  let { name } = useParams();

  const bird = birdData.find(bird => bird.name === name);

  return (
    <div>
      <img src={bird.image} alt={bird.name} />
      <h2>{bird.name}</h2>
      <i>{bird.genus}</i>

      <h3>Conservation status</h3>
      <p>{bird.conservationStatus}</p>

      <a href={bird.homepage}>Read More</a>
    </div>
  );
};

export default Show;

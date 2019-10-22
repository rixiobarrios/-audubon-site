import { Link } from "react-router-dom";

import React from "react";
import birdData from "../birdData";

const Home = () => (
  <div className="birdContainer">
    {birdData.map(bird => (
      <div>
        <Link to={bird.name}>
          <img src={bird.image} />
        </Link>
      </div>
    ))}
  </div>
);

export default Home;

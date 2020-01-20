import React, { Component } from "react";
import { birds } from "./birds";
import "./Home.css";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    let dataBirds = birds.map(item => {
      console.log("this is home page");
      return (
        <Link to={"/birds/" + item.name}>
          <img
            className="birds"
            src={item.image}
            alt={item.name}
            key={item.name}
          />
        </Link>
      );
    });

    return (
      <>
        <h2>Birds</h2>
        <p>{dataBirds}</p>
      </>
    );
  }
}
export default Home;

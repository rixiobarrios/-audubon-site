import React, { Component } from "react";
import "./Showpage.css";

class Showpage extends Component {
  render() {
    const { image } = this.props.match.params;

    const selectedBird = this.props.dataBirds.find(
      birds => birds.image === image
    );
    console.log("this is showpage", selectedBird);
    return (
      <div>
        <h2>
          {selectedBird.name} ({selectedBird.image})
        </h2>
        <ul>
          <li>Image: {selectedBird.image}</li>
          <li>Change: {selectedBird.name}</li>
          <li>High: {selectedBird.genus}</li>
          <li>Low: {selectedBird.conservationStatus}</li>
          <button>Read More{selectedBird.homepage}</button>
        </ul>
      </div>
    );
  }
}
export default Showpage;

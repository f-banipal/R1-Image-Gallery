import data from "./data";
import React from "react";
import "./index.css";

const App = ()=> {
  return (
    <div className="App">
      <h1>MY PHOTOS</h1>
      <div className="pictures">
        {data.map((item) => (
          <div className="picture">
            <div className="imageContainer">
              <img src={item.src.large} alt=""></img>
            </div>
            <div className="info">
              <span>{item.photographer}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

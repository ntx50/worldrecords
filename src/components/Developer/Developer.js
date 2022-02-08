import React from "react";
import "./Developer.css";
// import Thumb from "../../assets/thumb.png";

const Developer = () => {
  return (
    <div className="developers">
      <div className="container">
        <div className="left">
          <h2>
            Join The World Records Book <span className="blue"> in Blockchain </span> 
          </h2>
          <p>
            "Watch the most exciting records from around the world in action. See speed eating, extraordinary displays of strength, amazing human body records, incredible tech and much more!"
          </p>
        </div>
        <div className="right">
          <div className="img-container">
            <img src="https://media3.giphy.com/media/QZF9zME652t6YDL33a/giphy.gif" alt="nft-swap" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Developer;

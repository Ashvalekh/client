import React from "react";
import "./GetStarted.css";

const GetStarted = () => {
  const handleMailClick = () => {
    window.open("mailto:contact@castlewall.in", "_blank");
  };

  return (
    <div id="get-started" className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Get started with CastleWall</span>
          <span className="secondaryText">
            Write your plans and get super attractive price quotes from us.
            <br />
            Find your residence soon
          </span>
          <button className="button" onClick={handleMailClick}>
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;

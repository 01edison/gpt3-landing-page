import React from "react";
import "./flexDetails.css";

const FlexDetails = ({ move, heading, description, font }) => {
  return (
    <div className="flex-details-container">
      <div className={move == "up" ? "move-up" : "move-down"}>
        <div className="dash"></div>
        <h1
          className={`flex-details-heading ${
            font == "bigger" ? "bigger-heading" : "smaller-heading"
          }`}
        >
          {heading}
        </h1>
      </div>
      <p className="flex-details-description">{description}</p>
    </div>
  );
};

export default FlexDetails;

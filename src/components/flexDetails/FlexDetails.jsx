import React from "react";
import "./flexDetails.css";

const FlexDetails = ({ smaller, heading, description }) => {
  return (
    <div className="flex-details-container">
      <div className={!smaller ? "move-up" : "move-down"}>
        <div className="dash"></div>
        <h1
          className={`flex-details-heading ${
            !smaller ? "bigger-heading" : "smaller-heading"
          }`}
        >
          {heading}
        </h1>
      </div>
      <p className={`flex-details-description ${smaller && "smaller-width"}`}>{description}</p>
    </div>
  );
};

export default FlexDetails;

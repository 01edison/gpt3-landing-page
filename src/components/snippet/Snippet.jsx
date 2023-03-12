import React from "react";
import "./snippet.css";

const Snippets = ({ heading, description }) => {
  return (
    <div className="snippet-container">
      <div>
        <div className="dash"></div>
        <h1 className="snippet-heading">{heading}</h1>
      </div>
      <p className="snippet-description">{description}</p>
    </div>
  );
};

export default Snippets;

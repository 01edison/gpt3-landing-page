import React from "react";
import FlexDetails from "../flexDetails/FlexDetails";
import "./feature.css";

const Feature = () => {
  return (
    <div className="feature__container">
      <div>
        <p className="feature__paragraph">
          The Future is Now and You Just Need To Realize It. Step into Future
          Today & Make it Happen.
        </p>

        <p>Request Early Access to Get Started</p>
      </div>

      <div className="feature_details_container">
        <FlexDetails
          heading={"Improving ends distrust instantly"}
          description={
            "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded."
          }
          smaller
        />
        <FlexDetails
          heading={"Become the tended active"}
          description={
            "Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to."
          }
          smaller
        />
        <FlexDetails
          heading={"Message or am nothing"}
          description={
            "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded."
          }
          smaller
        />
        <FlexDetails
          heading={"Really boy law county   "}
          description={
            "Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush."
          }
          smaller
        />
      </div>
    </div>
  );
};

export default Feature;

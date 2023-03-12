import React from "react";
import FlexDetails from "../flexDetails/FlexDetails";
import Snippet from "../snippet/Snippet";

import "./inquiry.css";

const Inquiry = () => {
  return (
    <div className="inquiry__container">
      <FlexDetails
        font={"bigger"}
        move={"up"}
        heading={"What is GPT-3"}
        description={
          "We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
        }
      />

      <div>
        <h3>The possibilities are beyond your imagination</h3>
        <p>Explore The Library</p>
      </div>

      <div className="snippets">
        <Snippet
          heading={"Chatbots"}
          description={
            "We so opinion friends me message as delight. Whole front do of plate heard oh ought. "
          }
        />
        <Snippet
          heading={"Knowledgebase"}
          description={
            "At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
          }
        />
        <Snippet
          heading={"Education"}
          description={
            "At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
          }
        />
      </div>
    </div>
  );
};

export default Inquiry;

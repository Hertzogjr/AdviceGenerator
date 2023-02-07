import React from "react";

import "./Advice.css";

const Adivce = ({ advice }) => {
  return (
    <p className="advice">{`"${
      advice || "Click on the dice to generate an advice"
    }"`}</p>
  );
};

export default Adivce;

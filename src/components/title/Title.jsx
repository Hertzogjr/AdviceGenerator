import "./Title.css";
import React from "react";

const Title = ({ title }) => {
  return (
    <h1 className="title">
      ADVICE <span>{title ? `#${title}` : ""}</span>
    </h1>
  );
};

export default Title;

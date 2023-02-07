import React from "react";

import DividerImg from "../../../assets/images/pattern-divider-desktop.svg";

import "./Divider.css";

const Divider = () => {
  return (
    <div className="divider">
      <img src={DividerImg} alt="" />
    </div>
  );
};

export default Divider;

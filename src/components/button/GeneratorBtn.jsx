import React from "react";

import Dice from "../../assets/images/icon-dice.svg";

import "./GeneratorBtn.css";

const GeneratorBtn = ({ clickBtn }) => {
  return (
    <button className="generatorBtn" onClick={(e) => clickBtn()}>
      <img src={Dice} alt="" />
    </button>
  );
};

export default GeneratorBtn;

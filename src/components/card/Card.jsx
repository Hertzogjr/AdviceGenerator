import React from "react";

import Title from "../title/Title";
import Advice from "../advice/Advice";
import Divider from "../layout/divider/Divider";

import "./Card.css";
import GeneratorBtn from "../button/GeneratorBtn";
const Card = ({ advice, id, clickBtn }) => {
  return (
    <div className="card">
      <Title title={id} />
      <Advice advice={advice} />
      <Divider />
      <GeneratorBtn clickBtn={clickBtn} />
    </div>
  );
};

export default Card;

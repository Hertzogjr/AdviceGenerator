import React, { useEffect, useState } from "react";

import Container from "./components/layout/container/Container";
import Card from "./components/card/Card";

import "./app.css";

function App() {
  const api = "https://api.adviceslip.com/advice";
  const [advice, setAdvice] = useState([]);

  function clickBtn() {
    getAdvice();
  }

  const getAdvice = () => {
    fetch(api)
      .then((resp) => resp.json())
      .then((data) => {
        setAdvice(data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container>
      <Card
        advice={advice.slip?.advice}
        id={advice.slip?.id}
        clickBtn={clickBtn}
      />
    </Container>
  );
}

export default App;

import React, { useEffect, useState } from "react";


/* components */
import Header from "./components/Header";
import Button from "./components/Button";
import GetInput from "./components/GetInput";
import DisplayBMI from "./components/DisplayBMI";

import './App.css';
/* styled-components */
import { Container } from "./components/styles/App.styled";

export default function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBMI] = useState("");
  const [bmiCategory, setBMICategory] = useState("");

  const captureValue = (e) => {
    e.target.id === "weight"
      ? setWeight(+e.target.value)
      : setHeight(+e.target.value);
    setBMI("");
    setBMICategory("");
  };

  useEffect(() => {
    document.getElementById("weight").addEventListener("change", captureValue);
  }, [weight]);
  useEffect(() => {
    document.getElementById("height").addEventListener("change", captureValue);
  }, [height]);

  return (
    <Container>
      <Header />
      <DisplayBMI bmi={bmi} bmiCategory={bmiCategory} />
      <GetInput measurement={weight} id="weight" captureValue={captureValue} />
      <GetInput measurement={height} id="height" captureValue={captureValue} />
      <Button
        btnName="Calculate BMI"
        weight={weight}
        height={height}
        setBMI={setBMI}
        setBMICategory={setBMICategory}
        setHeight={setHeight}
        setWeight={setWeight}
      />
    </Container>
  );
}

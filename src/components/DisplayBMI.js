import React from "react";

import { Display } from "./styles/display.styled";

export default function DisplayBMI({ bmi, bmiCategory }) {
  return (
    <Display>
      <p>BMI Category</p>
      <p className="bmiDisp">
        {bmiCategory ? (
          <span>{bmiCategory}</span>
        ) : (
          <div className="circle"></div>
        )}
      </p>
      <p>Your BMI</p>
      <p className="bmiDisp">
        {bmiCategory ? <span>{bmi}</span> : <div className="circle"></div>}
      </p>
    </Display>
  );
}

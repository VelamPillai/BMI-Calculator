import React from "react";

import { Input, Range } from "./styles/Input.styled";

export default function GetInput({ measurement, id, captureValue }) {
  let maxVal;
  id === "weight" ? (maxVal = 200.0) : (maxVal = 3.0);
  return (
    <Input>
      <p>
        {id}
        {id === "weight" ? " (kg)" : " (m)"}
      </p>
      <h1>{measurement}</h1>

      <Range
        id={id}
        type="range"
        min={0}
        max={maxVal}
        step={0.05}
        value={measurement}
        onChange={captureValue}
      />
    </Input>
  );
}

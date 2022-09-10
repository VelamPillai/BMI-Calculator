import React,{useEffect} from "react";
import { ButtonStyle } from "./styles/Button.styled";

export default function Button({ weight, height, btnName, setBMI, setBMICategory, bmi, bmiCategory, setWeight, setHeight }) {
  
  const bmiArr = ["Under weight", "Normal Weight", "over Weight", "Obesity"];
  function calculateBMI(e) {
    
    e.preventDefault();
    //     height === 0 -> bmi will not be calculated
      let bmiVal;
       height && weight && 
      (bmiVal = ( weight  / Math.pow( height , 2)).toFixed(1));
    const flag = !bmiVal
      ? null
      : bmiVal < 18.5
      ? bmiArr[0]
      : bmiVal  > 18.5 && bmiVal < 24.9
      ? bmiArr[1]
      : bmiVal > 25 && bmiVal  < 29.9
      ? bmiArr[2]
      :bmiArr[3]
              
    
    const displayBMI = document.querySelector(".bmiDisp").textContent;
    displayBMI && (document.querySelector(".bmiDisp").style.display = "block");
    setBMICategory(flag);
    setBMI(bmiVal);
    setWeight(0);
    setHeight(0);
  }

    useEffect(() => {
     
    document
      .getElementById("btn")
      .addEventListener("click", calculateBMI);

    return function cleanUp() {
      document
        .querySelector("button")
        .removeEventListener("click", calculateBMI);
    };
  }, [weight,height]);
  return (
    <div>
      <ButtonStyle id='btn'>{btnName}</ButtonStyle>
    </div>
  );
}

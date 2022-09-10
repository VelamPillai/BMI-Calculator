import styled from "styled-components";

export const Input = styled.div`
font-family: monospace;
margin-top :.5rem;
height:300px;
width:95%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
line-height: 8px;
background-color: #090b20fa;
border-radius: 12px;

p{
    font-size: 1.5rem;
}
`;

// range

// excess height to improve interactive area / accessibility
const height = "36px";
const thumbHeight = 36;
const trackHeight = "16px";

// colours
const upperColor = "#ccc";
const lowerColor = "#666";
const thumbColor = "#0CBAA0";
const thumbHoverColor = "#0CBAA0";
const upperBackground = `linear-gradient(to bottom, ${upperColor}, ${upperColor}) 100% 50% / 100% ${trackHeight} no-repeat transparent`;
const lowerBackground = `linear-gradient(to bottom, ${lowerColor}, ${lowerColor}) 100% 50% / 100% ${trackHeight} no-repeat transparent`;

const makeLongShadow = (color, size) => {
    let i = 0;
    let shadow = `${i}px 0 0 ${size} ${color}`;
  
    for (; i < 706; i++) {
      shadow = `${shadow}, ${i}px 0 0 ${size} ${color}`;
    }
  
    return shadow;
  }; 
export const Range = styled.input`
  overflow: hidden;
  display: block;
  appearance: none;
  max-width: 500px;
  width: 100%;
  background-color: #090b20fa;
  margin: 0;
  border-color:#0CBAA0; 
  
  height: ${height};
  cursor: pointer;
  margin-top: 1rem;

  &:focus {
    outline: none;
  }

  &::-webkit-slider-runnable-track {
    width: 100%;
    height: ${height};
    background: ${lowerBackground};
    
    
   
  }

  &::-webkit-slider-thumb {
    position: relative;
    appearance: none;
    height: ${thumbHeight}px;
    width: ${thumbHeight}px;
    background: ${thumbColor};
    border-radius: 100%;
    border: 0;
    top: 50%;
    transform: translateY(-50%);
    box-shadow: ${makeLongShadow(upperColor, "-10px")}; 
    transition: background-color 150ms;
  }

  &::-moz-range-track,
  &::-moz-range-progress {
    width: 100%;
    height: ${height};
    background: ${upperBackground};
   
  }

  &::-moz-range-progress {
    background: ${lowerBackground};
    
  }

  &::-moz-range-thumb {
    appearance: none;
    margin: 0;
    height: ${thumbHeight};
    width: ${thumbHeight};
    background: ${thumbColor};
    border-radius: 100%;
    border: 0;
    transition: background-color 150ms;
  }

  &::-ms-track {
    width: 100%;
    height: ${height};
    border: 0;
    /* color needed to hide track marks */
    color: transparent;
    background: transparent;
  }

  &::-ms-fill-lower {
    background: ${lowerBackground};
  }

  &::-ms-fill-upper {
    background: ${upperBackground};
  }

  &::-ms-thumb {
    appearance: none;
    height: ${thumbHeight};
    width: ${thumbHeight};
    background: ${thumbColor};
    border-radius: 100%;
    border: 0;
    transition: background-color 150ms;
    /* IE Edge thinks it can support -webkit prefixes */
    top: 0;
    margin: 0;
    box-shadow: none;
  }

  &:hover,
  &:focus {
    &::-webkit-slider-thumb {
      background-color: ${thumbHoverColor};
    }
    &::-moz-range-thumb {
      background-color: ${thumbHoverColor};
    }
    &::-ms-thumb {
      background-color: ${thumbHoverColor};
    }
  }
`;

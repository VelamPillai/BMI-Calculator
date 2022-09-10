import styled from "styled-components";

export const Display = styled.div`
  font-family: monospace;

  height: 30%;
  box-sizing: border-box;
  padding: 20px;
  width: 95%;
  display: flex;
  line-height: 15px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #090b20fa;
  border-radius: 12px;

  div.circle {
    height: 10px;
    width: 10px;
    border: #10f5d2fa solid 1px;
    animation: borderanim infinite 2s ease-in-out;
  }
  span {
    color: #10f5d2fa;
    font-size: 1.5rem;
    border: 2px solid #10f5d2fa;
    padding: 10px;
  }
  p {
    font-size: 1.2rem;
  }
  @keyframes borderanim {
    0% {
      border-radius: 20%;
      transform: scale(1);
    }
    30% {
      border-radius: 40%;
      transform: scale(2);
    }
    40% {
      border-radius: 50%;
      transform: scale(3);
    }
    100% {
      border-radius: 80%;
      transform: scale(4);
    }
  }
`;

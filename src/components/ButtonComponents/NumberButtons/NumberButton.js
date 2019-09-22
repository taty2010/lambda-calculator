import React from "react";
import Numbers from "./Numbers"
const NumberButton = (props) => {
  console.log(props)
  return (
    <button onClick={() => props.setNumberState(props)} className = "numbersBttn buttons">
      <span>{props.buttonData}</span>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </button>
  );
};

export default NumberButton
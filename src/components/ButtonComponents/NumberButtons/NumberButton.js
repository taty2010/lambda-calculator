import React from "react";

const NumberButton = (props) => {

  return (
    <button onClick={props.clickFunc} value={props.number} className = "numbersBttn buttons">
      <span>{props.buttonData}</span>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </button>
  );
};

export default NumberButton
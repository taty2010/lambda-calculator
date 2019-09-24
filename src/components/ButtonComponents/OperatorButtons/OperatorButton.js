import React from "react";


const OperatorButton = (props) => {
  console.log(props.clickOperator)
  return (
    <button onClick={props.clickFunc} value={props.operator} className= "operatorBttn buttons">
      {props.buttonData}
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </button>
  );
};

export default OperatorButton
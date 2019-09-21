import React from "react";

 const SpecialButton = (props) => {
  return (
    <button className="specialBttn buttons">
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <span>{props.buttonData}</span>
    </button>
  );
};

export default SpecialButton
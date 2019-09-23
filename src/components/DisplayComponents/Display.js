import React from "react";


const Display = (props) => {
  console.log(props.display)
  return <div className="display"><p>{`${props.display}`}</p>{/* Display any props data here */}</div>;
};

export default Display
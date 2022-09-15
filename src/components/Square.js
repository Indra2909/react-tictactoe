import React from "react";

const Square = ({ onClick, value }) => {
  return (
    <div>
      <button className="square" onClick={onClick}>
        {value}
      </button>
    </div>
  );
};

export default Square;

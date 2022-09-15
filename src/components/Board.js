import React from "react";
import Square from "./Square";
import { useState } from "react";

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isX, setIsX] = useState(true);

  const setValueClick = (i) => {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = isX ? "X" : "O";
    setSquares(squares);
    setIsX(!isX);
  };

  const calculateWinner = (squares) => {
    const winningPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winningPatterns.length; i++) {
      let [a, b, c] = winningPatterns[i];

      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }

    return null;
  };

  const resetClick = () => {
    setSquares(Array(9).fill(null));
    setIsX(true);
  };

  const createSquare = (i) => {
    return <Square value={squares[i]} onClick={() => setValueClick(i)} />;
  };

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Next player: ${isX ? "X" : "O"}`;
  }

  return (
    <div className="container">
      <div className="title">
        <h1>Tic Tac Toe</h1>
      </div>
      <div className="board">
        {createSquare(0)}
        {createSquare(1)}
        {createSquare(2)}
        {createSquare(3)}
        {createSquare(4)}
        {createSquare(5)}
        {createSquare(6)}
        {createSquare(7)}
        {createSquare(8)}
      </div>
      <div className="sidebar">
        {status}
        <button className="btn" value="" onClick={resetClick}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Board;

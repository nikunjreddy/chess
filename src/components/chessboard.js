import React, { useState } from 'react';
import Cell from './cell';
import '../styles/Chessboard.css';

const Chessboard = () => {
  const size = 8;

  // function to get to default board
  const getDefaultBoard = () => {
    return Array(size).fill().map((_, rowIndex) =>
      Array(size).fill().map((_, colIndex) => ({
        color: (rowIndex + colIndex) % 2 === 0 ? 'white' : 'black'
      }))
    );
  };

  // initial state with dufault board and history
  const [board, setBoard] = useState(getDefaultBoard());
  const [history, setHistory] = useState([]);

  // function to change diagonally red
  const changeColorDiagonally = (row, col) => {
    const newBoard = getDefaultBoard().map((rowArray, rowIndex) =>
      rowArray.map((cell, colIndex) => {
        if (Math.abs(rowIndex - row) === Math.abs(colIndex - col)) {
          return { color: 'red' };
        } 
        return cell;
      })
    );
    setHistory([...history, board]);
    setBoard(newBoard);
  };

  // undo function
  const undoLastChange = () => {
    const lastState = history.pop();
    if (lastState) {
      setBoard(lastState);
      setHistory(history);
    }
  };

  return (
    <div>
      <div className="chessboard">
        {board.map((rowArray, rowIndex) =>
          rowArray.map((cell, colIndex) => (
            <Cell
              key={`${rowIndex}-${colIndex}`}
              color={cell.color}
              onClick={() => changeColorDiagonally(rowIndex, colIndex)}
            />
          ))
        )}
      </div><br></br>
      <button onClick={undoLastChange} disabled={history.length === 0}>Undo</button>
    </div>
  );
};

export default Chessboard;

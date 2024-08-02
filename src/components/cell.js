import React from 'react';
import '../styles/Chessboard.css';

const Cell = ({ color, onClick }) => {
  return (
    <div
      className={`cell ${color}`}
      onClick={onClick}
    ></div>
  );
};

export default Cell;

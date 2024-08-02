import React from 'react';
import Chessboard from './components/chessboard';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <h1>Chessboard</h1>
      <div className="chessboard-container">
        <Chessboard />
      </div>
    </div>
  );
};

export default App;

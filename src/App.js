import React, { useState } from 'react';
import './App.css';
import Square from './components/Square';
import Video from './components/Video';

const calculateWinner = (arr) => {
  const lines = [
    //**Horizontal
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    //**Diagonal
    [0, 4, 8],
    [6, 4, 2],
    //**Vertical
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (arr[a] && arr[a] === arr[b] && arr[a] === arr[c]) {
      return `${arr[a]} Wins!`;
    }
  }

  return "Who will Come Out Victorious!";
};

function App() {
  const [squares, setSquares] = useState(['', '', '', '', '', '', '', '', '']);
  const [player, setPlayer] = useState(true);

  const handleClick = () => {
    setSquares(['', '', '', '', '', '', '', '', '']);
    setPlayer(true);
  };

  return (
    <div className="App">
<Video />
      <span>{calculateWinner(squares)}</span>
      <div className="container">
        {squares.map((val, index) => (
          <Square
            key={index}
            squares={squares}
            index={index}
            setSquares={setSquares}
            squareValue={val}
            player={player}
            setPlayer={setPlayer}
          />
        ))}
        <button onClick={handleClick}>Reset</button>
      </div>
    </div>
  );
}

export default App;
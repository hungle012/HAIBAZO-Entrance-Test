import React from "react";

const GameArea = ({ numbers, handleNumberClick }) => {
  return (
    <div className="game-area">
      {numbers.map((number) => (
        <button
          key={number.id}
          className={`number-button ${number.status}`}
          style={{
            left: `${number.position.x}%`,
            top: `${number.position.y}%`,
          }}
          onClick={() => handleNumberClick(number.value)}
        >
          {number.value}
        </button>
      ))}
    </div>
  );
}

export default GameArea;
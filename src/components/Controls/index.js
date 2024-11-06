import React from "react";

const Controls = ({ gameState, startGame, toggleAutoPlay, isAutoPlay, points, timer, setPoints }) => {
  return (
    <div className="controls">
      <div className="label">
        <div  className="w-30">Points: </div>
        <input
          type="number"
          value={points}
          onChange={(e) => setPoints(Number(e.target.value))}
          min="1"
        />
      </div>
      <div className="label">
        <div className="w-30">Time:</div>
        <div>{timer.toFixed(1)}s</div>
      </div>
      <div className="button-group">
        <button onClick={startGame}>
          {gameState === "initial" ? "Start" : "Restart"}
        </button>
        {gameState === "playing" && (
          <button onClick={toggleAutoPlay}>
            {isAutoPlay ? "Auto Play OFF" : "Auto Play ON"}
          </button>
        )}
      </div>
    </div>
  );
}

export default Controls;
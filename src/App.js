import React, { useState, useEffect } from "react";
import "./App.css";
import GameArea from "./components/GameArea";
import Controls from "./components/Controls";
import Message from "./components/Message";

const App = () => {
  const [gameState, setGameState] = useState("initial");
  const [numbers, setNumbers] = useState([]);
  const [points, setPoints] = useState(5)
  const [currentNumber, setCurrentNumber] = useState(1);
  const [timer, setTimer] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(false);

  useEffect(() => {
    let interval;
    if (gameState === "playing") {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 0.1);
      }, 100);
    }
    return () => clearInterval(interval);
  }, [gameState]);

  const startGame = () => {
    const newNumbers = Array.from({ length: points }, (_, i) => ({
      id: i + 1,
      value: i + 1,
      position: { x: Math.random() * 90, y: Math.random() * 90 },
      status: "active"
    }));
    setNumbers(newNumbers);
    setCurrentNumber(1);
    setTimer(0);
    setIsAutoPlay(false);
    setGameState("playing");
  };

  const handleNumberClick = (clickedNumber) => {
    if (gameState !== "playing") return;
    if (clickedNumber === currentNumber) {
      setNumbers(numbers.map(num =>
        num.value === clickedNumber ? { ...num, status: "clicked" } : num
      ));
      setCurrentNumber(currentNumber + 1);
      if (currentNumber === numbers.length) {
        setGameState("won");
      }
    } else {
      setGameState("lost");
    }
  };

  const toggleAutoPlay = () => {
    setIsAutoPlay(!isAutoPlay);
  };

  useEffect(() => {
    if (isAutoPlay && gameState === "playing") {
      const autoPlayInterval = setInterval(() => {
        handleNumberClick(currentNumber);
      }, 1500);
      return () => clearInterval(autoPlayInterval);
    }
  }, [isAutoPlay, currentNumber, gameState]);

  return (
    <div className="App">
      <Message gameState={gameState} />
      <Controls
        gameState={gameState}
        startGame={startGame}
        toggleAutoPlay={toggleAutoPlay}
        isAutoPlay={isAutoPlay}
        points={points}
        setPoints={setPoints}
        timer={timer}
      />
      <GameArea
        numbers={numbers}
        handleNumberClick={handleNumberClick}
      />
      {gameState === "playing" && <div>Next: {currentNumber}</div>}
    </div>
  );
}

export default App;
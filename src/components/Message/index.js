import React from "react";

const Message = ({ gameState }) => {
  let message = "";
  let color = "Black";
  switch (gameState) {
    case "initial":
      message = "LET'S PLAY";
      break;
    case "lost":
      message = "GAME OVER";
      color = "Red";
      break;
    case "won":
      message = "ALL CLEARED";
      color = "Green";
      break;
    default:
      message = "LET'S PLAY";
  }

  return <div className="message" style={{color: `${color}`}}>{message}</div>;
}

export default Message;
import { useState } from "react";
import './App.css';
import InGame from "./components/InGame";
import Welcome from "./components/Welcome";

export default function App() {
  const [game, setGame] = useState(false);

  function startGame() {
    setGame(true);
  }

  return (
    <div>
      {game ? (
        <InGame />
      ) : (
        <Welcome ans={startGame}/>
      )}
    </div>
  )
}

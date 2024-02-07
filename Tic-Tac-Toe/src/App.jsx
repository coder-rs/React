import { useState } from "react";
import GameBoard from "./Components/GameBoard"
import Player from "./Components/Player"
import Log from "./Components/Log";
import { WINNING_COMBINATIONS } from "./winning-combinations";
import GameOver from "./Components/GameOver";

const PLAYERS = {
  X: "Player1",
  O: "Player2"
};
const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];


function derivedActiveState(gameTurns) {
  let currPlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") currPlayer = "O";
  return currPlayer;
}

function deriveGameBoard(gameTurns){
  let gameBoard = [...INITIAL_GAME_BOARD.map(array => [...array])];
  for (let turn of gameTurns) {
    let { square, player } = turn;
    let { row, col } = square;
    gameBoard[row][col] = player;
  }
  return gameBoard;
}

function getWinner(gameBoard, players){
  let winner;
  for (let combination of WINNING_COMBINATIONS) {
    let firstSquareSymbol = gameBoard[combination[0].row][combination[0].col];
    let secondSquareSymbol = gameBoard[combination[1].row][combination[1].col];
    let thirdSquareSymbol = gameBoard[combination[2].row][combination[2].col];
    if(firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && secondSquareSymbol === thirdSquareSymbol){
      winner = players[firstSquareSymbol];
    }
  }
  return winner;
}

function App() {
  const [players, setPlayerName] = useState(PLAYERS);
  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = derivedActiveState(gameTurns);
  const gameBoard = deriveGameBoard(gameTurns);
  const winner = getWinner(gameBoard, players);

  let hasDraw = false;
  if(gameTurns.length === 9 && !winner) hasDraw = true;

  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns((prevTurn) => {
      let currPlayer = derivedActiveState(prevTurn);
      let updatedTurn = [{ square: { row: rowIndex, col: colIndex }, player: currPlayer }, ...prevTurn];
      return updatedTurn;
    });
  }

  function handleRestart(){
    setGameTurns([]);
  }

  function handlePlayerChangeName(symbol, newName){
    setPlayerName((prevPlayerName) => {
      return {
        ...prevPlayerName,
        [symbol]: newName
      };
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName={PLAYERS.X} symbol="X" isActive={activePlayer === "X"} onNameChange={handlePlayerChangeName}/>
          <Player initialName={PLAYERS.O} symbol="O" isActive={activePlayer === "O"} onNameChange={handlePlayerChangeName}/>
        </ol>
        {(winner || hasDraw) && <GameOver winner={winner} onRestart={handleRestart} />}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  )
}

export default App

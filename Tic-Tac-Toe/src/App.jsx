import Player from "./Components/Player"

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName="player 1" symbol="X" />
          <Player initialName="player 2" symbol="O" />
        </ol>
        Game Board
      </div>
      Log
    </main>
  )
}

export default App

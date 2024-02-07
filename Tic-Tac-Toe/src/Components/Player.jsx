import { useState} from "react";

export default function Player({initialName, symbol, isActive, onNameChange}) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleSelect(){
    setIsEditing(editing => !editing);
    if(isEditing){
      onNameChange(symbol, playerName);
    }
  }

  function handleChange(event){
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  let buttonCaption = "Edit";

  if(isEditing){
    editablePlayerName = <input type="text" required value={playerName} onChange={handleChange}></input>
    buttonCaption = "Save";
  }

  return (
    <li className={(isActive) ? "active" : "" }>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleSelect}>{buttonCaption}</button>
    </li>
  )
}
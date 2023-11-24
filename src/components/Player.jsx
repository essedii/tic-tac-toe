import { useState } from "react"

export default function Player({initialName, symbol, isActive, onChangeName}) {
    const [ playerName, setPlayerName ] = useState(initialName)
    const [ isEditing, setIsEditing ] = useState(false);

    function handleEditClick() {
        setIsEditing(isEditing => !isEditing);
        if (isEditing) {
            onChangeName(symbol, playerName);
        }
    }

    function handleChange(event) {
        setPlayerName(event.target.value);
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>;

    if (isEditing) {
        editablePlayerName = (
            <input type="text" onChange={handleChange} required value={playerName}/>
        );
    }

    let buttonCaption = isEditing? 'Save' : 'Edit';

    return (
    <li className={isActive? 'active': undefined}>
        <span className="player">
            {editablePlayerName}
            <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={()=>handleEditClick()}>{buttonCaption}</button>
    </li>
    )
}

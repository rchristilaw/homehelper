import React from "react";

const StickyNote = ({ id, note, onDelete, onUpdate }) => (
    <div>
        <div onClick={() => onDelete(id)}>X</div>
        <input defaultValue={note} onBlur={(e) => onUpdate(id, e.target.value)}></input>
    </div>
);

export default StickyNote;
import React from "react";

import './StickyNote.css';

const StickyNote = ({ id, note, onDelete, onUpdate }) => (
    <div className="sticky-note">
        <div className="delete-note-container">
            <div className="delete-note" onClick={() => onDelete(id)}>X</div>
        </div>
        <div className="note-area">
        <textarea placeholder="Add text.." defaultValue={note} onBlur={(e) => onUpdate(id, e.target.value)}></textarea>
        </div>
    </div>
);

export default StickyNote;
import React from "react";

import API from "../utils/Api";
import StickyNote from "./StickyNote";
import Note from "./Note";

import './Notepad.css';

class NotePad extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userId: 1,
            isLoading: true,
            notes: [],
        };
    }

    deleteStickyNote = async (id) => {
        if (id) {
            const noteIdParam = { id: id };
            let response = await API.get('note/delete', { params: noteIdParam })

            let notes = this.state.notes.filter(note => note.id !== id);

            this.setState({
                notes: notes
            });
        }
    }

    addStickyNote = async () => {
        let text = "";
        const params = { userId: this.state.userId, note: text };
        let response = await API.post('note', params);

        let noteId = response.data.data.newRowId;

        let notes = this.state.notes;

        notes.push(new Note(noteId, this.state.userId, text));

        this.setState({
            notes: notes
        });
    }

    updateStickyNote = async (noteId, text) => {
        let response = await API.post('note/update', { noteId: noteId, note: text });

        let notes = this.state.notes;

        let noteIndex = notes.findIndex(note => note.id === noteId);
        notes[noteIndex].note = text;

        this.setState({
            notes: notes
        });
    }

    render() {
        let notes = this.state.notes;

        let noteDivs = notes.map(item => 
            <StickyNote key={item.id} id={item.id} note={item.note} onDelete={this.deleteStickyNote} onUpdate={this.updateStickyNote} />
        );

        return (
            <div className="notepad">
                {noteDivs}
                <div className="add-note" onClick={this.addStickyNote}>
                    <div className="add-note-icon">+</div>
                </div>
            </div>
        );
    }

    async componentDidMount() {
        let userData = await API.get('note', {
            params: {
                user: this.state.userId
            }
        })

        // Parse the results for ease of use.
        let notes = userData.data.data.map(item => new Note(item.id, item.userId, item.note));

        this.setState({
            notes: notes
        });
    }
}

export default NotePad;
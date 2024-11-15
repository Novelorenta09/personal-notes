import React from "react";
import { getInitialData } from "../utils/index";
import NoteList from "./NoteList";
import NoteInput from "./NoteInput";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
    };

    this.onDelHandler = this.onDelHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
  }

  onDelHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onAddNoteHandler({ notTitle, bodNote }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title: notTitle,
            body: bodNote,
            createdAt: new Date().toISOString(),
            archived: false,
          },
        ],
      };
    });
  }

  render() {
    return (
      <>
        <h1 className="title">My Personal Notes</h1>
        <div className="note-app">
          <NoteInput addNote={this.onAddNoteHandler} />
        </div>
        <div className="note-app__body">
          <NoteList notes={this.state.notes} onDelete={this.onDelHandler} />
        </div>
      </>
    );
  }
}
export default NoteApp;

import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, onDelete }) {
  return (
    <div className="notes-list">
      {notes.length > 0 ? notes.map((note) => <NoteItem key={note.id} title={note.title} createdAt={note.createdAt} body={note.body} id={note.id} onDelete={onDelete} />) : <p className="notes-list__empty-message">Tidak ada catatan</p>}
    </div>
  );
}

export default NoteList;

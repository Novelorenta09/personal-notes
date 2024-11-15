import React from "react";
import NoteContent from "./NoteContent";
import { getInitialData, showFormattedDate } from "../utils/index";
import DelButton from "./DeleteNotes";

function NoteItem({ title, body, createdAt, id, onDelete }) {
  const formatDate = showFormattedDate(createdAt);

  return (
    <div className="note-item">
      <NoteContent notTitle={title} date={formatDate} bodNote={body} />
      <DelButton id={id} onDelete={onDelete} />
    </div>
  );
}

export default NoteItem;

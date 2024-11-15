import React from "react";

function NoteContent({ notTitle, bodNote, date }) {
  return (
    <div className="note-item__content">
      <h4 className="note-item__title">{notTitle}</h4>
      <p className="note-item__date">{date}</p>
      <p className="note-item__body">{bodNote}</p>
    </div>
  );
}

export default NoteContent;

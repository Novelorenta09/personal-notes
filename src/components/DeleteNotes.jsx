import React from "react";

function DelButton({ id, onDelete }) {
  return (
    <button className="note-item__delete-button" onClick={() => onDelete(id)}>
      x
    </button>
  );
}
export default DelButton;

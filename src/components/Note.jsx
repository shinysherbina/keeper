import React from "react";

function Note(props) {
  return (
    <div className="note">
      <p>{props.note.title}</p>
      <p>{props.note.note}</p>
    </div>
  );
}

export default Note;

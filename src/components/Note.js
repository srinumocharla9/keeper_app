import React from "react";

function Note(props) {
  return (
    <div className="note">
      <h1>{props.notes.title}</h1>
      <p>{props.notes.content}</p>


    </div>
  );
}

export default Note;

import React, { useState } from "react";
import Heading from "./Header";
import Input from "./Input";
import Note from "./Note";

function App() {
  var [notes, setNotes] = useState([]);

  var [id, setId] = useState(1);

  function addNote(note) {
    return setNotes((prevValue) => {
      return [...prevValue, note];
    });
  }

  function updateId() {
    var newid = id + 1;
    setId(newid);
  }

  return (
    <div className="App">
      <Heading />
      <Input addNote={addNote} currentId={id} updateId={updateId} />
      <div className="notes-area">
        {notes.map((note) => {
          return <Note key={note.id} id={note.id} note={note} />;
        })}
      </div>
    </div>
  );
}

export default App;

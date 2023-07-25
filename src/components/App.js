import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes_info from "/home/seenu/Udemy/React_learn/keeper_app_2/src/notes.js";

/* Rather than using this function We are using arrow function in the line 21 
function createNote(note){
  console.log(note.key)
  return(
  <Note notes={note} key={note.key}/>
  );
}
*/



function App() {
  return (
    <div>
      <Header />
      {notes_info.map(note => <Note notes={note} key={note.key} />)}
      <Footer />
    </div>
  );
}

export default App;

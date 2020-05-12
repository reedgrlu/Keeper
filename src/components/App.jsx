import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
// import notes from "../notes";
import CreateArea from "./CreateArea";

// console.log(notes)

function App() {
    const [noteArray, setNoteArray] = useState([])

    function addNote(note) {
        setNoteArray([...noteArray, note])
        // console.log(noteArray);  
    }

    function discardNote(id) {
        setNoteArray(
            noteArray.filter((note, index) => {
                return (id !== index)
            })
        )
    }

    return (
        <div>
            <Header />
            <CreateArea addNote={addNote} />
            {
                noteArray.map((note, index) => {
                    return <Note key={index} title={note.title} content={note.content} id={index} onDiscard={discardNote} />
                })
            }
            <Footer />
        </div>
    );
}


export default App;

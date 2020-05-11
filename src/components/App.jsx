import React, {useState} from "react";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
// import notes from "../notes";
import CreateArea from "./CreateArea";

// console.log(notes)

function App(){
    const [noteTitle, setNoteTitle] = useState("");
    const [noteContent, setNoteContent] = useState("");

    function addNote(note){
        setNoteTitle(note[0]);
        setNoteContent(note[1]);
    }
    
    return (
        <div>
            <Header />
            <CreateArea addNote={addNote}/>
            <Note title={noteTitle} content={noteContent} />
            <Footer />
        </div>
    );
}


export default App;

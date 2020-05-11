import React, {useState} from "react";
import Note from "./Note";

function CreateArea(props) {
    const [noteTitle, setNoteTitle] = useState("");
    const [noteContent, setNoteContent] = useState("");
    
    function changeTitle(event){
        setNoteTitle(event.target.value);
    }

    function changeContent(event){
        setNoteContent(event.target.value);
    }
  
    return (
        <div>
        <form>
            <input name="title" placeholder="Title" onChange={changeTitle} value={noteTitle} />
            <textarea name="content" placeholder="Take a note..." rows="3" onChange ={changeContent} value={noteContent} />
            <button onClick = {event => {
                props.addNote([noteTitle,noteContent]);
                setNoteTitle("");
                setNoteContent("");

                event.preventDefault();
                
            }}>Add</button>
        </form>
        </div>
    );
}

export default CreateArea;

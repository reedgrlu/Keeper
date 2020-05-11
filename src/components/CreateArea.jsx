import React, { useState } from "react";
import Note from "./Note";

function CreateArea(props) {
    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    function changeNote(event) {
        const value = event.target.value;
        const name = event.target.name;
        
        if (name === "title") {
            setNote(prev => {
                return {
                    title: value,
                    content: prev.content
                }
            })
        } else if (name === "content") {
            setNote(prev => {
                return {
                    title: prev.title,
                    content: value
                }
            })

        }
    }

    return (
        <div>
            <form>
                <input name="title" placeholder="Title" onChange={changeNote} value={note.title} />
                <textarea name="content" placeholder="Take a note..." rows="3" onChange={changeNote} value={note.content} />
                <button onClick={event => {
                    props.addNote(note);
                    setNote({
                        title: "",
                        content: ""
                    })

                    event.preventDefault();
                }}>Add</button>
            </form>
        </div>
    );
}

export default CreateArea;

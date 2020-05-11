import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
// import notes from "../notes";
import CreateArea from "./CreateArea";

// console.log(notes)

function App(){
    return (
        <div>
            <Header />
            <CreateArea />
            <Note key={1} title="Note title" content="Note content" />
            <Footer />
        </div>
    );
}


export default App;

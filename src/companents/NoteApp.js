import { useEffect, useState } from "react";
import AddNote from "./AddNote";
import Navbar from "./Navbar";
import NoteLists from "./NoteLists";



const NoteApp = () => {

    const [notes, setNotes] = useState([ ]);

    useEffect(() => {
        console.log("loaded");
        const data = JSON.parse(localStorage.getItem("notes"));
        if(data) {
            setNotes(data);
        }
    },[]);

    useEffect(() => {
        console.log("updated");
        localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes]);

    const newNote = (title) => {
        setNotes([...notes, { id: notes.length + 1, title: title }]);
    }

    return (
    
            <div className="container">
                
            
            <Navbar notes={notes} />
            <NoteLists notes = {notes} />
            <AddNote newNote={newNote }/>
            
            </div>
        
    );


};

export default NoteApp;
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

    const newNote = (title ,description) => {
        setNotes([...notes, { id: notes.length + 1, title: title , description : description}]);
    }


const removeNote = (id)=> {
  setNotes(notes.filter((note)=>note.id !== id));

}


    return (
    
            <div className="container">
                
            
            <Navbar notes={notes} />
            <NoteLists notes = {notes} removeNote={removeNote} />
            <AddNote newNote={newNote }/>
            
            </div>
        
    );


};

export default NoteApp;
import { useState , useEffect } from "react"
import AddNote from "./AddNote";

const Notelist = ()=> {

const [notes,setNotes]= useState ([

{id:1 , title: " Note 1"},
{id:2 , title: " Note 2"},
{id:3 , title: " Note 3"}

]);

useEffect ( () => {

    const data = JSON.parse(localStorage.getItem("notes"));
    if (data){
        setNotes(data);
    }

},[]  );


useEffect (()=> {
console.log("updated");

    localStorage.setItem("notes", JSON.stringify(notes));
},[notes] )


// useEffect (()=> {
//     localStorage.setItem("notes", JSON.stringify(notes));
// },[notes]); 

const NewNote = (title)=> {
    setNotes ([...notes,{id: notes.length+1, title: title} ])
}

return (
<>

<ul className="note-list">

    {notes.map(note => {
        return (  
            <li key={note.id}>
              
                {note.title}

            </li>
        );
    })}     
    
</ul>
<AddNote NewNote={NewNote}/>



</>
);



};


export default Notelist
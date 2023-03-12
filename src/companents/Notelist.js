import { useState } from "react"

const Notelist = ()=> {

const [notes,setNotes]= useState ([

{id:1 , title: " Note 1"},
{id:2 , title: " Note 2"},
{id:3 , title: " Note 3"}

]);

const Addnote = ()=> {
    setNotes ([...notes,{id:4 , title: " Note 4"} ])
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
<button onClick={Addnote} type=""> ADD  NOTE</button>
</>
);



};


export default Notelist
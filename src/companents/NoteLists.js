import Note from "./Note";

const NoteLists = ({ notes ,removeNote }) => {

    return (

    <div className="note-list">    
         <ul className="title">
             { notes.map( note => {
              return (<Note note={note} key={note.id} removeNote = {removeNote}/>
            );
        }) }
        </ul>
    </div>
            );
    
        }


export default NoteLists;

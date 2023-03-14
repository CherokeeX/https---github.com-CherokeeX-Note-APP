import Note from "./Note";

const NoteLists = ({ notes ,removeNote }) => {

    return (
         <ul className="note-list">
    { notes.map( note => {
        return (
            <Note note={note} key={note.id} removeNote = {removeNote}/>
            );
        }) }
    </ul>
    
            );
    
    }


export default NoteLists;

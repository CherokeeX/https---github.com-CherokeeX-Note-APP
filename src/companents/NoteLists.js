import Note from "./Note";

const NoteLists = ({ notes }) => {

    return (
         <ul className="note-list">
    { notes.map( note => {
        return (
            <Note note={note} key={note.id}/>
            );
        }) }
    </ul>
    
            );
    
    }


export default NoteLists;

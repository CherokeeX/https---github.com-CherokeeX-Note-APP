import Note from "./Note";

const NoteLists = ({ notes ,removeNote }) => {

    return notes.length > 0 ? 
    (
        <div className="note-list">
            <ul>
                { notes.map(note => { return (<Note note={note} key={ note.id } removeNote={removeNote} />); }) }
            </ul>
        </div>
    ) : 
    (
        <div className="empty"> <h2>There is no Any Note Yet</h2>  </div>
    );

}


export default NoteLists;

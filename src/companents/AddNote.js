import { useState } from "react";

const AddNote = ({ newNote }) => {

    const [title, setTitle] = useState('');
    const [description, setdescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        newNote(title,description);
        setTitle('');
        setdescription ('')
    }

    return (
        <form onSubmit={ handleSubmit }>
          
            <input type="text" placeholder="TITLE"  value={title} onChange={ (e) => setTitle(e.target.value) } />
            <input type="text"  placeholder="ACIKLAMA" value={description} onChange={ (e) => setdescription(e.target.value) } />
            <input type="submit" value="Add Note" />
        </form>
    );


}

export default AddNote;
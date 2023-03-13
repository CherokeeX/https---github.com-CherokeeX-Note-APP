import { useState } from "react";


const AddNote = ({NewNote})=>{

const [title,setTitle] = useState('')
const handleSubmit =(e)=> {

    e.preventDefault();
    NewNote (title);
    setTitle('')

}
return (

<form onSubmit={ handleSubmit }>
    <label for="title">Title</label>
    <input type="text"  value={title} onChange ={(e)=>setTitle(e.target.value)}/> 
    <input type="submit" name="" value="Add Note" />
</form>


);


}


export default AddNote ; 
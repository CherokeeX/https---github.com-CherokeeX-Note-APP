import { useState } from "react";


const AddNote = (props)=>{

const [title,setTitle] = useState('')
const handleSubmit =(e)=> {

    e.preventDefault();
    props.NewNote (title);
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
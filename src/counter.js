import { useState } from 'react';
import './App.css';





function App(props) {
  const  [count , setCount] = useState(props.count)
  const [text,setText]= useState(props.text)
  return (
<div>
  <p>Butona  {count} Kez tikladiniz {text}</p><input onChange={(e)=>setText(e.target.value)} type="" name="" value={text}/>
  <button type="text" onClick={()=>setCount(count+1)} >+1</button>
  <button type="text" onClick={()=>setCount(count-1)}>-1</button>
  <button type="text" onClick={()=>setCount(props.count)}>Reset</button>
</div>





)

  
    
  
}

export default App;

import { useState } from "react";

export default function SearchBar({onSearch}) {

   const [id, setID] = useState('')
   
   const handleOnSubmit = (event)=>{
      setID(event.target.value)
   }



   return (
      <div>
         <input onChange={handleOnSubmit} type='search' />
         <button onClick={()=>onSearch(id)}>Agregar</button>
      </div>
   );
}

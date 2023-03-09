import { useState } from "react";
import style from './SearchBar.module.css'

export default function SearchBar({onSearch}) {

   const [id, setID] = useState('')
   
   const handleOnSubmit = (event)=>{
      setID(event.target.value)
   }



   return (
      <div className={style.container}>
         <input className={style.input} onChange={handleOnSubmit} type='search' />
         <button className={style.btn} onClick={()=>onSearch(id)}>Agregar</button>
      </div>
   );
}

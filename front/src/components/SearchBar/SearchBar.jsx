import { useState } from "react";
import style from './SearchBar.module.css'

export default function SearchBar({onSearch, charRandom,nav}) {

   const [id, setID] = useState('')
   
   const handleOnSubmit = (event)=>{
      setID(event.target.value)
   }
   
   
   console.log(nav);

   return (

      <div className={style.container }>
         <span className={style.random}onClick={charRandom}>¿?</span>
         <input className={style.input} onChange={handleOnSubmit} type='search' />
         <span className={style.btn} onClick={()=>onSearch(id)}>Add</span>
      </div>
   );
}

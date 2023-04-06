import {  useState } from "react";
import style from './SearchBar.module.css'
import { addCharacter } from "../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";

export default function SearchBar() {

   const dispatch = useDispatch()
   const {homeCharacters} = useSelector(state=>state)

   const [id, setID] = useState('')
   
   const onSearch = (id) =>{
      const URL_BASE = "http://localhost:3001/rickandmorty"
      fetch(`${URL_BASE}/onsearch/${id}`)
         .then((response) => response.json())
         .then((data) =>{
            data.key = data.id;
            if(data.name){
               let newArray = homeCharacters.map(char => char.id)
               let idArray = data.id;

               if(newArray.includes(idArray)){
                  window.alert('Ya hay un personaje con ese ID')
               }else{
                  dispatch(addCharacter(data))
               }
            }else{ window.alert('No hay personaje con ese ID')}
         })
   }

   const charRandom = (event) =>{
      let idRandom = Math.floor(Math.random() * 826)+1;
      onSearch(idRandom)
  }
   const handleOnChange = (event)=>{
      setID(event.target.value)
   }

   return (
      <div className={style.container }>
         <span className={style.random}onClick={charRandom}>¿?</span>
         <input className={style.input} onChange={handleOnChange} type='search' />
         <span className={style.btn} onClick={()=>onSearch(id)}>Add</span>
      </div>
   );
}

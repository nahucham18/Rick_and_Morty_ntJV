import style from './Card.module.css'

import axios from 'axios'

import { Link } from 'react-router-dom'
import { deleteFav, addFav, deleteCharacter } from '../../redux/actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';



function Card(props) {

   const {name, species, gender, id,image} = props

   const dispatch = useDispatch()
   const myFavorites = useSelector(state => state.myFavorites)

   const [ isFav, setIsFav ] = useState(false)

      useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   const handleFavorite = () =>{
      if(isFav === true){
         setIsFav(false)
         dispatch(deleteFav(id))
         axios.delete(`http://localhost:3001/rickandmorty/fav/${id}`)
         

      }else{
         setIsFav(true)
         dispatch (addFav({name,species,gender,id,image}))
         axios.post('http://localhost:3001/rickandmorty/fav',{name,species,gender,id,image})
      }
   }

   const onClose = ()=>{
      axios.delete(`http://localhost:3001/rickandmorty/fav/${id}`)
      dispatch(deleteCharacter(id))
      dispatch(deleteFav(id));
   }

   return (
      <div className={style.container}>
         <button className={style.btn} onClick={onClose}>X</button>
            {
               isFav ? (
                  <button className={style.like} onClick={handleFavorite}>❤️</button>
               ) : (
                  <button className={style.like} onClick={handleFavorite}>🤍</button>
               )
            }
         <Link to={`/rickandmorty/detail/${id}`}>
            {
               (name.length > 15)
               ? (name.length > 20)
                  ? (name.length > 27)
                     ? <h2 className={style.titulo_xl}>{name}</h2>
                     : <h2 className={style.titulo_grande}>{name}</h2>
                  :<h2 className={style.titulo_medio}>{name}</h2>
               : <h2 className={style.titulo}>{name}</h2>

            }
            
         </Link>
         <img className={style.image} src={image} alt={name} />
      </div>
   );
}

export default (Card)
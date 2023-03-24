import style from './Card.module.css'

import { Link } from 'react-router-dom'
import { deleteFav, addFav } from '../../redux/actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';



function Card(props) {

   const {name, species, gender, onClose, id,image} = props

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
      }else{
         setIsFav(true)
         dispatch(addFav({name,species,gender,id,image}))
      }


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
         <Link to={`/detail/${id}`}>
            {
               (name.length > 22)
               ? <h2 className={style.titulo_medio}>{name}</h2>
               : <h2 className={style.titulo}>{name}</h2>
            }
            
         </Link>
         <img className={style.image} src={image} alt={name} />
         <div className={style.description}>
            <h2>{species}</h2>
            <h2>{gender}</h2>
         </div>
      </div>
   );
}

export default (Card)
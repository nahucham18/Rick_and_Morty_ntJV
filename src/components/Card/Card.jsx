import style from './Card.module.css'
import { Link } from 'react-router-dom'

function Card(props) {

   const {name, species, gender, onClose, id} = props
   return (
      <div className={style.container}>
         <button className={style.btn} onClick={onClose}>X</button>
         <Link to={`/detail/${id}`}>
            {
               (name.length > 22)
               ? <h2 className={style.titulo_medio}>{name}</h2>
               : <h2 className={style.titulo}>{name}</h2>
            }
            
         </Link>
         <img className={style.image} src={props.image} alt={name} />
         <div className={style.description}>
            <h2>{species}</h2>
            <h2>{gender}</h2>
         </div>
      </div>
   );
}

export default Card
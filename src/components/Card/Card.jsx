import style from './Card.module.css'

function Card(props) {

   const {name, species, gender, onClose} = props
   return (
      <div className={style.container}>
         <button className={style.btn} onClick={onClose}>X</button>
         <h2 className={style.titulo}>{name}</h2>
         <img className={style.image} src={props.image} alt={name} />
         <div className={style.description}>
            <h2>{species}</h2>
            <h2>{gender}</h2>
         </div>
      </div>
   );
}

export default Card
import style from './Cards.module.css'
import Card from '../Card/Card';
import { useSelector } from 'react-redux';


export default function Cards(props) {

   const {copyHomeCharacters} = useSelector(state => state)
   

   return (
      <div className={style.container}>
            <div className={style.container_cards}>
            {
               copyHomeCharacters.map((char)=>{
                  return (
                     <Card 
                        id={char.id}
                        key={char.id}
                        name={char.name}
                        species={char.species}
                        gender={char.gender}
                        image={char.image}
                        status={char.status}
                        />
                  )
               })
            }
         </div>
      </div>
      );
}

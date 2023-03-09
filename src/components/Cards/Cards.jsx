import style from './Cards.module.css'
import Card from '../Card/Card';


export default function Cards(props) {
   const { characters, onClose } = props;
   return (
      <div className={style.container}>
         {
            characters.map((char,index)=>{
               return (
                  <Card 
                     id={char.id}
                     key={index}
                     name={char.name}
                     species={char.species}
                     gender={char.gender}
                     image={char.image}
                     onClose={()=>onClose(char.id)}
                     />
               )
            })
         }
      </div>
      );
}

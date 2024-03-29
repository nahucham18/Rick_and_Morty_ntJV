import { Link, useLocation, useParams } from 'react-router-dom'
import style from './CardDetail.module.css'


const CardDetail = (props) =>{

    const {pathname} = useLocation()
    const {character} = props
    return(
        <div className={style.container}>
            <div className={style.cardDetail}>
                <Link className={style.btn} to={
                    (pathname.includes('favorites'))
                    ?`/rickandmorty/favorites`
                    :`/rickandmorty/home`
                    }>Volver</Link>
                
                <h2 className={style.title}>{character.name}</h2>
                <h2 className={style.id}>{character.id}</h2>
                <div className={style.container_description}>
                    <div className={style.image_container}>
                        <img src={character.image} alt={character.name} className={style.image}/>
                            {character.status === 'Alive' && <h2 className={style.status_alive}>{character.status}</h2>}
                            {character.status === 'Dead' && <h2 className={style.status_dead}>{character.status}</h2>}
                            {character.status === 'unknown' && <h2 className={style.status_unknown}>{character.status}</h2>}
                    </div>
                    <div className={style.description}>
                    <span className={style.titles}>Origen: </span>
                    <span className={style.desc}>{character.origin?.name}</span>
                        <br />
                            <span className={style.titles}>Gender: </span>
                            <span className={style.desc}>{character.gender}</span>
                        
                        <br />
                            <span className={style.titles}>Species: </span>
                            <span className={style.desc}>{character.species}</span>
                        
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default CardDetail
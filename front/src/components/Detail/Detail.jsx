import style from './Detail.module.css'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'



const Detail = ()=>{

    const { id } = useParams()
    

    const [character, setCharacter] = useState('')
    useEffect(()=>{
        const URL_BASE = "https://rickandmortyapi.com/api"
        const API_KEY = "ef19ec2c194a.fa1ee29143e598093d2f"
        fetch(`${URL_BASE}/character/${id}?key=${API_KEY}`)
            .then((resp)=>resp.json())
            .then((data)=>{
                (data.name)
                ? setCharacter(data)
                : window.alert('No esta esa ID')
            })
    },[id])

    return (
        <div className={style.container}>

        <Link className={style.btn} to={`/home`}>Volver</Link>
        
            <h2 className={style.title}>{character.name}</h2>
            <div className={style.container_image}>
            <h2 className={style.id}>{character.id}</h2>
                <img src={character.image} alt={character.name} className={style.imagen}/>
                    {character.status === 'Alive' && <h2 className={style.status_alive}>{character.status}</h2>}
                    {character.status === 'Dead' && <h2 className={style.status_dead}>{character.status}</h2>}
                    {character.status === 'unknown' && <h2 className={style.status_unknown}>{character.status}</h2>}
            </div>
            <div className={style.container_description}>
                <h2 className={style.origin}>Origen:</h2>
                <h2 className={style.origin_name}>{character.origin?.name}</h2>
                <div className={style.description}>
                    <div className={style.gender}>
                        <h3>Gender:</h3>
                        <h3>{character.gender}</h3>
                    </div>
                    <div className={style.species}>
                        <h3>Species: </h3>
                        <h3>{character.species}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detail
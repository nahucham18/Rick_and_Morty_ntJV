import style from './Detail.module.css'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'



const Detail = ()=>{

    const { id } = useParams()
    

    const [character, setCharacter] = useState('')
    useEffect(()=>{
        const URL_BASE = "http://localhost:3001/rickandmorty"
        // const API_KEY = "ef19ec2c194a.fa1ee29143e598093d2f"
        fetch(`${URL_BASE}/detail/${id}`)
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
            <h2 className={style.id}>{character.id}</h2>
            <div className={style.container_description}>
                <div className={style.image_container}>
                    <img src={character.image} alt={character.name} className={style.image}/>
                        {character.status === 'Alive' && <h2 className={style.status_alive}>{character.status}</h2>}
                        {character.status === 'Dead' && <h2 className={style.status_dead}>{character.status}</h2>}
                        {character.status === 'unknown' && <h2 className={style.status_unknown}>{character.status}</h2>}
                </div>
                <div className={style.description}>
                <span className={style.titles}>Origen:</span>
                <span className={style.origin_name}>{character.origin?.name}</span>
                    <br />
                        <span className={style.titles}>Gender: </span>
                        <span>{character.gender}</span>
                    
                    <br />
                        <span className={style.titles}>Species: </span>
                        <span>{character.species}</span>
                    
                    </div>
                </div>
            </div>
    )
}

export default Detail
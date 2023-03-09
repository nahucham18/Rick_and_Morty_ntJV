import style from './Detail.module.css'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'



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
    },[])

    return (
        <div className={style.container}>
            <h1>{character.name}</h1>
            <h3>{character.id}</h3>
            <img src={character.image} alt={character.name} className={style.imagen}/>
            <h2>{character.status}</h2>
            <h2>{character.origin?.name}</h2>
            <div className={style.description}>
                <h2>{character.gender}</h2>
                <h2>{character.species}</h2>
            </div>
        </div>
    )
}

export default Detail
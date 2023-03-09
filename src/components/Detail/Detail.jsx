import style from './Detail.module.css'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Detail = ()=>{

    const { id } = useParams()
    

    const [charatacter, setCharacter] = useState('')
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
        <div>
            <h1>{CharacterData.name}</h1>
        </div>
    )
}

export default Detail
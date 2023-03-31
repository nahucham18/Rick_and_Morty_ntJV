import style from './Detail.module.css'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import CardDetail from '../CardDetail/CardDetail'



const Detail = ()=>{

    const { id } = useParams()
    


    const [character, setCharacter] = useState('')
    useEffect(()=>{
        const URL_BASE = "http://localhost:3001/rickandmorty/detail/"
        // const API_KEY = "ef19ec2c194a.fa1ee29143e598093d2f"
        fetch(`${URL_BASE}${id}`)
            .then((resp)=>resp.json())
            .then((data)=>{
                (data.name)
                ? setCharacter(data)
                : window.alert('No esta esa ID')
            })

            return setCharacter('')
    },[id])

    return (
        <div className={style.container}>
                <div className={style.up}></div>
                {
                    (!character)
                    ?<span>Cargado...</span>
                    :<CardDetail character={character}/>
                }
            </div>
    )
}

export default Detail
import style from './About.module.css'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

const About = () =>{

    const navigate = useNavigate()
    const {access} = useSelector(state=>state)

    useEffect(()=>{
        if(!access){
            navigate('/rickandmorty')
        }
    },[])


    

    return(
        <div className={style.container}>
            <div className={style.about}>
                <h1 className={style.title}>Chamorro Nahuel</h1>
                <h5 className={style.subtitle}>Cohorte WebFT36a</h5>
                <p className={style.parrafo}>Soy Nahuel Chamorro, a la mitad del 2022 que me entre a este mundo de la programacion, siendo la rama de desarrollo Web lo que mas me llamo la atención. <br/><br/> Hice un par de cursos,a la vez  siendo autodidacta, investigando y tratando de resolver algunos problemas que me surgian en mis proyectos.</p>
                <p className={style.parrafo}>Recientemete, estoy cursando el Bootcamp de <span>Soy Henry</span> la carrera de dev full-stack, aunque siento que mi lado por la que me tiro mas es por la parte Front-end</p>
            </div>
        </div>
    )
}

export default About
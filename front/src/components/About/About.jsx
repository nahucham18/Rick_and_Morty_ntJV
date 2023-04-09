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
                <p className={style.parrafo}>Mi nombre es Nahuel Chamorro, a mediados del 2022 comence a estudiar programacion de manera autodidacta realizando cursos y volcando esos conocimientos en proyectos, de esta manera es que descubri que la rama de la programación que mas me gusta es el Desarrollo Web. <br/><br/></p>
                <p className={style.parrafo}>Este Año me inicie en <span>Soy Henry</span> la carrera de full-stack para ampliar mis conocimientos y poder abrirme en el ámbito laboral, gracias a Henry pude desarrollar esta App aplicando las tecnologias que vimos a lo largo del Bootcamp.</p>
            </div>
        </div>
    )
}

export default About
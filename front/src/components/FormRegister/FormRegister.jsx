import { useDispatch } from 'react-redux'
import style from './FormRegister.module.css'
import validation from '../Form/Validation'
import { access } from '../../redux/actions/actions'
import axios from 'axios'

import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const FormRegister = () =>{
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const [ userData, setUserData] = useState({
        email:'',
        password:'',
    })

    const [ errors, setErrors] = useState({
        email:'No hay error',
        password:'No hay error',
    })

    const handleOnChange = (event) =>{
        setUserData({
            ...userData,
            [event.target.name]: event.target.value,
        })

    setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value,}))
    }

    const handleOnSubmit = async(event) =>{
        event.preventDefault()  
        console.log(userData);  
        await axios.post('http://localhost:3001/rickandmorty/user',{
            email: userData.email,
            password: userData.password
        }).then(response =>{
            console.log(response.data);
        }).catch(error=>{
            console.log(error.response.data.error);
        })
    
        
    }


    return (
        
        <div className={style.container}>
            <img src="https://logos-world.net/wp-content/uploads/2022/01/Rick-And-Morty-Logo.png" alt="" className={style.imagen}/>    
            <form onSubmit={handleOnSubmit} action="" className={style.form}>
                <h1 className={style.title}>Register</h1>
                <div className={style.container_inputs}>
                    <div className={style.contenedor_label}>
                        <label className={style.label}>
                            <span className={style.title_input}>Email:</span>
                            <input className={style.input} onChange={handleOnChange} type="text" name="email" />
                            <h6 className={(errors.email !== 'No hay error')? style.error : style.noError}>{errors.username}</h6>
                        </label>
                            
                    </div>
                    
                    <div className={style.contenedor_label}>
                        <label className={style.label}>
                        <span className={style.title_input}>Password:</span>
                            <input className={style.input} onChange={handleOnChange} type="password" name="password" />
                            <h6 className={(errors.password !== 'No hay error')? style.error : style.noError}>{errors.password}</h6>
                            </label>
                        
                    </div>
                </div>

                <button className={style.btn_login}>Register</button>
                <Link to="/rickandmorty">Login</Link>
            </form>
        </div>
    )
}

export default FormRegister;
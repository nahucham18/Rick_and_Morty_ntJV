import style from './Form.module.css'
import validation from './Validation'

import { useState } from 'react'

const Form = ({login}) =>{

    const [ userData, setUserData] = useState({
        username:'',
        password:'',
    })

    const [ errors, setErrors] = useState({
        username:'No hay error',
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

    const handleOnSubmit = (event) =>{
        login(userData)
        event.preventDefault()
    }    


    return (
        
        <div className={style.container}>
            <img src="https://logos-world.net/wp-content/uploads/2022/01/Rick-And-Morty-Logo.png" alt="" className={style.imagen}/>    
            <form onSubmit={handleOnSubmit} action="" className={style.form}>
                <h1>Login</h1>
                <div className={style.contenedor_label}>
                    <label className={style.label}>Username:</label>
                        <input className={style.input} onChange={handleOnChange} type="text" name="username" />
                        <span className={(errors.username !== 'No hay error')? style.error : style.noError}>{errors.username}</span>
                        
                </div>
                
                <div className={style.contenedor_label}>
                    <label className={style.label}>
                        Password: 
                        </label>
                        <input className={style.input} onChange={handleOnChange} type="password" name="password" />
                        <span className={(errors.password !== 'No hay error')? style.error : style.noError}>{errors.password}</span>
                    
                </div>

                <button className={style.btn_login}>LOGIN</button>
            
            </form>
        </div>
    )
}

export default Form
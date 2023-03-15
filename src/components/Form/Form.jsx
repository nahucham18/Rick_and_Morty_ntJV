import style from './Form.module.css'
import validation from './Validation'

import { useState } from 'react'

const Form = ({login}) =>{

    const [ userData, setUserData] = useState({
        username:'',
        password:'',
    })

    const [ errors, setErrors] = useState({
        username:'',
        password:'',
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
            <img src="https://logos-world.net/wp-content/uploads/2022/01/Rick-And-Morty-Logo.png" alt="" />    
            <form onSubmit={handleOnSubmit} action="" className={style.form}>
                <h1>Login</h1>
                <label className={style.label}>Username:
                    <input onChange={handleOnChange} type="text" name="username" />
                    {errors.username && <span>{errors.username}</span>}
                </label>
                
                <label className={style.label}>
                    Password: 
                    <input onChange={handleOnChange} type="password" name="password" />
                    {errors.password && <span>{errors.password}</span>}
                </label>
            
                <button className={style.btn_login}>LOGIN</button>
            
            </form>
        </div>
    )
}

export default Form
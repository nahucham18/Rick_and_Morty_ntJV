import React from "react"
import { Link } from 'react-router-dom'

import SearchBar from '../SearchBar/SearchBar'


import style from './Nav.module.css'

const Nav =({onSearch})=>{
    
    const charRandom = (event) =>{
        let idRandom = Math.floor(Math.random() * 826)+1;
        onSearch(idRandom)
    }

    return(
        
        <nav>
            <div className={style.nav}>
                <div className={style.menu}>
                    <Link className={style.link} to={`/about`}>About</Link>
                    <Link className={style.link} to={`/home`}>Home</Link>
                </div>
                <div className={style.add}>
                    <button className={style.random}onClick={charRandom}>¿?</button>
                    <SearchBar onSearch={onSearch}/>
                </div>
            </div>
        </nav>
    )
}

export default Nav
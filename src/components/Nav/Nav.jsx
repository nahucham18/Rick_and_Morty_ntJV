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
        <nav className={style.nav}>
            <div className={style.menu}>
                <Link to={`/about`}>About</Link>
                <Link to={`/home`}>Home</Link>
            </div>
            <div className={style.left_nav}>
                <SearchBar onSearch={onSearch}/>
                <button onClick={charRandom}>?</button>
            </div>
        </nav>
    )
}

export default Nav
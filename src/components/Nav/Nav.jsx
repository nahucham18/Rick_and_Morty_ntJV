import React from "react"
import SearchBar from '../SearchBar/SearchBar'
import style from './Nav.module.css'

const Nav =({onSearch})=>{
    
    const charRandom = (event) =>{
        let idRandom = Math.floor(Math.random() * 826)+1;
        console.log(idRandom)
        onSearch(idRandom)
    }

    return(
        <nav className={style.nav}>
            <SearchBar onSearch={onSearch}/>
            <button onClick={charRandom}
                        >?</button>
        </nav>
    )
}

export default Nav
import React, { useState } from "react"
import { Link } from 'react-router-dom'
import { useLocation } from "react-router-dom"






import style from './Nav.module.css'

const Nav =({onSearch, logout})=>{
    

    const [ nav, setNav ] = useState(false)


    const { pathname} = useLocation()

    // const navOnChange = () =>{
    //     if(window.innerHeight <= 350 )
    //         if(window.scrollY > 200){
    //             setNav(true)
    //         }else {
    //             setNav(false)
    //         }
    //     else if(window.innerHeight <=  576)
    //     if(window.scrollY > 400){
    //         setNav(true)
    //     }else {
    //         setNav(false)
    //     }

    //     else if(window.innerHeight <=  765)
    //     {
    //         setNav(true)
    //     }
    //     }

    // window.addEventListener('scroll',navOnChange)

    return(
        
        <nav>
            <div className={style.nav}>
                <div className={style.menu}>
                    <Link className={style.link} to={`/about`}>About</Link>
                    <Link className={style.link} to={`/home`}>Home</Link>
                    <Link className={style.link} to={`/favorites`}>Favorites</Link>
                    <span className={style.logout} onClick={()=>logout()}>Logout</span>
                </div>
                {/* {
                pathname === '/home' &&
                
                    <SearchBar onSearch={onSearch} 
                                charRandom={charRandom}
                                nav={nav}
                                />
            
                } */}
            </div>
        </nav>
    )
}

export default Nav
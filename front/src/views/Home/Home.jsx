import Cards from '../../components/Cards/Cards'
import SearchBar from'../../components/SearchBar/SearchBar'
import style from './Home.module.css'
import Selectores from '../../components/Selectores/Selectores'
import { useSelector } from 'react-redux'
import MensajeHome from '../../components/MensajeHome/MensajeHome'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'


const Home = () =>{

    const {homeCharacters} = useSelector(state=>state)
    
    const {access} = useSelector(state=>state)
    const navigate = useNavigate()
    useEffect(()=>{
        !access && navigate('/rickandmorty');
    },[])

    return (
        <div className={style.home}>
            <div className={style.image}>
                <h1 className={style.title}>Rick And Morty App</h1>
                <p className={style.description}>Esta aplicación esta diseñada para buscar especificamente o aleatoriamente entre los 826 personajes que aparecen en la serie de Rick and Morty, podras ver sus detalles como también marcar tus favoritos para luego verlos en la sección "Favorites". </p>
            </div>
                
            <div className={style.divDown}>
                <SearchBar/>
                <Selectores/>
                
                {
                    (homeCharacters<1)
                    ?<MensajeHome/>
                    :<Cards/>
                }
                
            
            </div>
        </div>
    )
}

export default Home
/* <img className={style.img_home} src="https://images3.alphacoders.com/812/812062.png" alt="" /> */
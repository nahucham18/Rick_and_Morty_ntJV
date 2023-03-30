import Cards from '../../components/Cards/Cards'
import SearchBar from'../../components/SearchBar/SearchBar'
import style from './Home.module.css'
import Selectores from '../../components/Selectores/Selectores'
import { useSelector } from 'react-redux'


const Home = ({onSearch}) =>{

    const charRandom = (event) =>{
        let idRandom = Math.floor(Math.random() * 826)+1;
        onSearch(idRandom)
    }

    const {homeCharacters} = useSelector(state => state)

    return (
        <div className={style.home}>
            <div className={style.image}>
                <h1 className={style.title}>Rick And Morty App</h1>
                <p className={style.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic soluta quis similique eligendi fugiat quidem modi ullam? Nostrum corporis consectetur repellendus sequi quis dolore eaque minima atque commodi, assumenda nisi?</p>
            </div>
                
            <div className={style.divDown}>
                <SearchBar onSearch={onSearch}
                            charRandom={charRandom}/>
                <Selectores/>
                
                {
                    (homeCharacters<1)
                    ?<div className={style.vacio}>
                        <h1 className={style.mensaje}>No tienes ningun personaje cargado</h1> 
                    </div>
                    :<Cards/>
                }
                
            
            </div>
        </div>
    )
}

export default Home
/* <img className={style.img_home} src="https://images3.alphacoders.com/812/812062.png" alt="" /> */
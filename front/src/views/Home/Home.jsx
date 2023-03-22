import Cards from '../../components/Cards/Cards'
import SearchBar from'../../components/SearchBar/SearchBar'
import style from './Home.module.css'


const Home = ({characters, onClose, onSearch}) =>{

    const charRandom = (event) =>{
        let idRandom = Math.floor(Math.random() * 826)+1;
        onSearch(idRandom)
    }

    return (
        <div className={style.home}>
            <div className={style.image}>
                {/* <img className={style.img_home} src="https://images3.alphacoders.com/812/812062.png" alt="" /> */}
                <h1 className={style.title}>Rick And Morty App</h1>
                <p className={style.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic soluta quis similique eligendi fugiat quidem modi ullam? Nostrum corporis consectetur repellendus sequi quis dolore eaque minima atque commodi, assumenda nisi?</p>
            </div>
                
            <div className={style.divDown}>
                <SearchBar onSearch={onSearch}
                            charRandom={charRandom}/>
                {
                characters.length === 0 && <div className={style.vacio}>
                    <h1 className={style.mensaje}>No tienes ningun personaje cargado</h1> 
                    </div>
                }
                <Cards characters={characters}
                        onClose={onClose}></Cards>
            </div>
        </div>
    )
}

export default Home
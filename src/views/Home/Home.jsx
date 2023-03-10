import Cards from '../../components/Cards/Cards'
import style from './Home.module.css'


const Home = ({characters, onClose}) =>{
    return (
        <div>
            <div className={style.image}>
                
            </div>
            {characters.length === 0 && <h1 className={style.mensaje}>No tienes ningun personaje cargado</h1>}
            <Cards characters={characters}
                    onClose={onClose}></Cards>
        </div>
    )
}

export default Home
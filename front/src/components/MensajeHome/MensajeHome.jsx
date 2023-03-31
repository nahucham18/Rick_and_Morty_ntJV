import style from './MensajeHome.module.css'

const MensajeHome = () =>{
    return(
        <div>
            <div className={style.vacio}>
                    <span className={style.mensaje}>No tienes ningun personaje cargado</span> 
            </div>
        </div>
    )
}

export default MensajeHome
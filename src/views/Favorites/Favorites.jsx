import style from './Favorites.module.css'
import { connect } from 'react-redux'

const Favorites = () => {

    return(
        <div className={style.container}>
            <h1>Buenas soy Favorites</h1>
        </div>
    )
}

const mapStateToProps = (state) =>{
    
} 

export default connect(mapStateToProps,null)(Favorites)
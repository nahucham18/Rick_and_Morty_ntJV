import style from './Favorites.module.css'
import { connect } from 'react-redux'
import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { filterGender, orderFav } from '../../redux/actions/actions'

class Favorites extends React.Component {
    constructor(props){
        super(props)
    }

    
    componentDidMount(){
        getFavorites()      
    }    

    render()
    {
        const handleOrder = (event) =>{
            const value = event.target.value;
            this.props.orderFav(value)
        }
        const handleGender = (event) =>{
            const value = event.target.value;
            this.props.filterGender(value)
        }
        
        
        return(
            <div className={style.container}>
                <h2 className={style.title}>My Favorites</h2>
                <div className={style.selectores}>
                    <select className={style.selector} onChange={handleOrder} name="" id="">
                        <option value="Order" selected disabled>Order</option>
                        <option value="Ascendente" >Ascendente</option>
                        <option value="Descendente">Descendente</option>
                    </select>

                    <select className={style.selector} onChange={handleGender} name="" id="">
                        <option value="Gender" selected disabled>Gender</option>
                        <option value="All">All</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Genderless">Genderless</option>
                        <option value="unknown">Unknown</option>
                    </select>
                </div>

                <div className={style.contain_favorites}>
                    {
                        this.props.myFavorites.map( (fav) => {
                            return  <Link to={`detail/${fav.id}`} className={style.link}>
                                        <div className={style.fav} key={fav.id}>
                                            <img className={style.image} src={fav.image} alt={fav.name} />
                                            <span className={style.id}>{fav.id}</span>
                                        </div>
                                    </Link>
                        })
                    }
                </div>
            </div>
        )
    }
}

const getFavorites = async()=>{
    const favs = await axios.get("http://localhost:3001/rickandmorty/fav/")
    return favs;
}


const mapStateToProps = (state) =>{
    return{
        myFavorites: state.allCharacters
    }
} 

const mapDispatchToProps = {
    orderFav,
    filterGender
}

export default connect(mapStateToProps,mapDispatchToProps)(Favorites)
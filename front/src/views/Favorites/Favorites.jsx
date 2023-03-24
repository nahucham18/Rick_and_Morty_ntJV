import style from './Favorites.module.css'
import { connect } from 'react-redux'
import React from 'react'
import { filterFav, orderFav } from '../../redux/actions/actions'

class Favorites extends React.Component {
    constructor(props){
        super(props)

    
    }
    

    
    render()
    
    {
        
        const handleOrder = (event) =>{
            const value = event.target.value;
            this.props.orderFav(value)
        }
        const handleGender = (event) =>{
            const value = event.target.value;
            this.props.filterFav(value)
        }
        
        
        return(
            <div className={style.container}>
                <h2 className={style.title}>My Favourites</h2>
                <div>
                    <select onChange={handleOrder} name="" id="">
                        <option value="Order" selected disabled>Order</option>
                        <option value="Ascendente" >Ascendente</option>
                        <option value="Descendente">Descendente</option>
                    </select>

                    <select onChange={handleGender} name="" id="">
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
                            return  <div className={style.fav} key={fav.id}>
                                        <img className={style.image} src={fav.image} alt={fav.name} />
                                        <span>{fav.id}</span>
                    
                                    </div>
                        })
                    }
                </div>
            </div>
        )
    }
}



const mapStateToProps = (state) =>{
    return{
        myFavorites: state.allCharacters
    }
} 

const mapDispatchToProps = {
    orderFav,
    filterFav
}

export default connect(mapStateToProps,mapDispatchToProps)(Favorites)
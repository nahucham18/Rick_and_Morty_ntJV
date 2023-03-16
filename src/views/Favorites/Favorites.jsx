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
        return(
            <div className={style.container}>
                <div>
                    <select name="" id="">
                        <option value="Order" selected disabled>Order</option>
                        <option value="Ascendente" >Ascendente</option>
                        <option value="Descendente">Descendente</option>
                    </select>

                    <select name="" id="">
                        <option value="Gender" selected disabled>Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Genderless">Genderless</option>
                        <option value="Unknown">Unknown</option>
                    </select>
                </div>
                {
                    this.props.myFavorites.map( (fav) => {
                        return <div key={fav.id}>
                                    <h1>{fav.name}</h1>
                                    <span>{fav.id}</span>

                                </div>
                    })
                }
                <h1>Buenas soy Favorites</h1>
            </div>
        )
    }
}



const mapStateToProps = (state) =>{
    return{
        myFavorites: state.myFavorites
    }
} 

const mapDispatchToProps = (dispatch) =>{
    return {
        orderFav: ()=>{dispatch(orderFav)},
        filterFav:()=>{dispatch(filterFav)}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Favorites)
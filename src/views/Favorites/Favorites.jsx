import style from './Favorites.module.css'
import { connect } from 'react-redux'
import React from 'react'

class Favorites extends React.Component {
    constructor(props){
        super(props)
        console.log(this.props.myFavorites);

    }

    render(){
        return(
            <div className={style.container}>
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

export default connect(mapStateToProps,null)(Favorites)
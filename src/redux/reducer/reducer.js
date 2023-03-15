import { ADD_FAV, DELETE_FAV } from '../actions-types/actions-types'

const initialState = ({
                        myFavorites:[],
                        })

const reducer =(state = initialState, action) =>{
    switch(action.type){
        case ADD_FAV:
            return  {
                    ...state,
                    myFavorites:[...state.myFavorites,action.payload]
                    }

        case DELETE_FAV:
            return{
                    ...state,
                    myFavorites:state.myFavorites.filter(fav =>{
                    return fav.id !== action.payload})
                    }    
        
        default: return {
                        ...state
                        }
    }
}

export default reducer
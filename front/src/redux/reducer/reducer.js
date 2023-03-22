import { ADD_FAV, DELETE_FAV, ORDER_FAV, FILTER_FAV } from '../actions-types/actions-types'

const initialState = ({
                        myFavorites:[],
                        allCharacters:[]
                        })

const {allCharacters} = initialState

const reducer =(state = initialState, action) =>{
    switch(action.type){
        case ADD_FAV:
            return  {
                    ...state,
                    myFavorites:[...state.myFavorites,action.payload],
                    allCharacters:[...state.myFavorites,action.payload]
                    }

        case DELETE_FAV:
            return{
                    ...state,
                    myFavorites:state.myFavorites.filter(fav =>{
                    return fav.id !== action.payload})
                    }    
        
        case FILTER_FAV:
            return{
                ...state,
                allCharacters: allCharacters.filter(char => char.gender === action.payload)
                    
            }

        case ORDER_FAV:
            if(action.payload === 'Ascendente'){
                return {
                    ...state,
                    myFavorites: allCharacters.sort((a,b)=> a-b)
                }
            }else{
                return{
                    ...state,
                    myFavorites: allCharacters.sort((a,b)=> b-a)
                }
            }
            


        default: return {
                        ...state
                        }
    }
}

export default reducer
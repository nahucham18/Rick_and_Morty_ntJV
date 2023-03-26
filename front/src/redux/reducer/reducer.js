import { ADD_FAV, DELETE_FAV, ORDER_FAV, FILTER_FAV, ADD_CHARACTER} from '../actions-types/actions-types'

const initialState = ({
                        homeCharacters:[],
                        myFavorites:[],
                        allCharacters:[]
                        })

const {allCharacters} = initialState

const reducer =(state = initialState, action) =>{
    switch(action.type){
        case ADD_CHARACTER:
            return{
                ...state,
                homeCharacters:[...state.homeCharacters,action.payload]
            }

        case ADD_FAV:
            return  {
                    ...state,
                    myFavorites:[...state.myFavorites,action.payload],
                    allCharacters:[...state.myFavorites,action.payload]
                    }

        case DELETE_FAV:
            console.log('llegue');
            return{
                    ...state,
                    myFavorites:state.myFavorites.filter(fav =>{
                    return fav.id !== action.payload}),
                    allCharacters:state.myFavorites.filter(fav =>{
                    return fav.id !== action.payload})
                    }    
        
        case FILTER_FAV:
            if(action.payload === 'All'){
                return{
                    ...state,
                    allCharacters: [...state.myFavorites]
                }
            }

            return{
                ...state,
                allCharacters: state.myFavorites.filter(char => char.gender === action.payload)
                    
            }

        case ORDER_FAV:
            if(action.payload === 'Ascendente'){
                return {
                    ...state,
                    allCharacters: [...state.allCharacters.sort((a, b)=> a.id - b.id)]
                }
            }
            return{
                    ...state,
                    allCharacters: [...state.allCharacters.sort((a, b)=> b.id - a.id)]
                }
            
        default: return {
                        ...state
                        }
    }
}

export default reducer
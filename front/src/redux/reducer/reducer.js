import { ADD_FAV, DELETE_FAV, ORDER_FAV, FILTER_GENDER,FILTER_GENDER_HOME, ADD_CHARACTER, DELETE_CHARACTER,FILTER_SPECIES_HOME, FILTER_STATUS_HOME, ACCESS, DONT_ACCESS} from '../actions-types/actions-types'

const initialState = ({
                        access:false,
                        homeCharacters:[],
                        copyHomeCharacters:[],
                        myFavorites:[],
                        allCharacters:[]
                        })

const {characters} = initialState

const reducer =(state = initialState, action) =>{
    switch(action.type){
        case ADD_CHARACTER:
            return{
                ...state,
                homeCharacters:[...state.homeCharacters,action.payload],
                copyHomeCharacters:[...state.homeCharacters,action.payload]
            }
        case ACCESS:
                return{
                    ...state,
                    access:true,
                }
            

        case DONT_ACCESS:    
            return{
                ...state,
                access:false,
            }

        case ADD_FAV:
            return  {
                    ...state,
                    myFavorites:[...state.myFavorites,action.payload],
                    allCharacters:[...state.myFavorites,action.payload]
                    }

        case DELETE_CHARACTER:
            return{
                ...state,
                homeCharacters:state.homeCharacters.filter( character =>{
                    return character.id !== action.payload
                }),
                copyHomeCharacters:state.homeCharacters.filter( character =>{
                    return character.id !== action.payload
                })
            }

        case DELETE_FAV:
            console.log('llegue');
            return{
                    ...state,
                    myFavorites:state.myFavorites.filter(fav =>{
                    return fav.id !== action.payload}),
                    allCharacters:state.myFavorites.filter(fav =>{
                    return fav.id !== action.payload}),
                    
                    }    
        
        case FILTER_GENDER:
            
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
        case FILTER_GENDER_HOME:
            
            if(action.payload === 'All'){
                return{
                    ...state,
                    copyHomeCharacters: [...state.homeCharacters]
                }
            }

            return{
                ...state,
                copyHomeCharacters: state.homeCharacters.filter(char => char.gender === action.payload)
                    
            }
        case FILTER_SPECIES_HOME:
            
            if(action.payload === 'All'){
                return{
                    ...state,
                    copyHomeCharacters: [...state.homeCharacters]
                }
            }

            return{
                ...state,
                copyHomeCharacters: state.homeCharacters.filter(char => char.species === action.payload)
                    
            }
        case FILTER_STATUS_HOME:
            
            if(action.payload === 'All'){
                return{
                    ...state,
                    copyHomeCharacters: [...state.homeCharacters]
                }
            }

            return{
                ...state,
                copyHomeCharacters: state.homeCharacters.filter(char => char.status === action.payload)
                    
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
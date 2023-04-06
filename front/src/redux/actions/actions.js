import { ADD_FAV , DELETE_FAV, FILTER_GENDER,FILTER_GENDER_HOME, ORDER_FAV, ADD_CHARACTER, DELETE_CHARACTER, FILTER_SPECIES_HOME, FILTER_STATUS_HOME, ACCESS, DONT_ACCESS} from "../actions-types/actions-types";

export const addCharacter = (character) =>{
    return{type: ADD_CHARACTER ,payload:character}
}
export const addFav = (character) =>{
    return{type: ADD_FAV ,payload:character}
}

export const deleteFav = (id)=>{
    return {type: DELETE_FAV, payload:id}
}

export const filterGender = (gender) =>{
    return {type: FILTER_GENDER, payload:gender}
}
export const filterGenderHome = (gender) =>{
    return {type: FILTER_GENDER_HOME, payload:gender}
}
export const filterSpeciesHome = (species) =>{
    return {type: FILTER_SPECIES_HOME, payload:species}
}
export const filterStatusHome = (status) =>{
    return {type: FILTER_STATUS_HOME, payload:status}
}

export const orderFav = (order) => {
    return {type: ORDER_FAV, payload:order}
}

export const deleteCharacter = (id) =>{
    return {type: DELETE_CHARACTER, payload:id}
}

export const access = ( )=>{
    return{type: ACCESS}
}
export const dontAccess = ( )=>{
    return{type: DONT_ACCESS}
}

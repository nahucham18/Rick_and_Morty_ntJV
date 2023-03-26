import { ADD_FAV , DELETE_FAV, FILTER_GENDER, ORDER_FAV, ADD_CHARACTER, DELETE_CHARACTER} from "../actions-types/actions-types";

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

export const orderFav = (order) => {
    return {type: ORDER_FAV, payload:order}
}

export const deleteCharacter = (id) =>{
    return {type: DELETE_CHARACTER, payload:id}
}


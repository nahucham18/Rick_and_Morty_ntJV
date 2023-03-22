import { ADD_FAV , DELETE_FAV, FILTER_FAV, ORDER_FAV} from "../actions-types/actions-types";

export const addFav = (character) =>{
    return{type: ADD_FAV ,payload:character}
}

export const deleteFav = (id)=>{
    return {type: DELETE_FAV, payload:id}
}

export const filterFav = (gender) =>{
    return {type: FILTER_FAV, payload:gender}
}

export const orderFav = (id) => {
    return {type: ORDER_FAV, payload:id}
}

const axios = require('axios')
const URL = "https://rickandmortyapi.com/api/character/";

const getCharDetail = async (charID) =>{
        const characterDetail = await axios.get(URL+charID)
        const { id,name,species,gender,status,origin,image} = characterDetail.data
        const newCharacter = {id,name,species,gender,status,origin,image}
        return newCharacter
}

module.exports = getCharDetail;
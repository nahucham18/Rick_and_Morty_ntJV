// const axios = require('axios')

// const getCharDetail = (res,ID) =>{
//     axios(`https://rickandmortyapi.com/api/character/${ID}`)
//     .then(response =>{
//         const {data} = response
//         let obj = {
//             id:data.id,
//             image:data.image,
//             name:data.name,
//             gender:data.gender,
//             species:data.species,
//             status:data.status,
//             origin:data.origin?.name
//         }
//         res.writeHead(200,{'Content-type':'application/json'}).end(JSON.stringify(obj))
//     })

//     .catch(err=> res.writeHead(500,{'Content-type':'text/plain'}).end('Error de datos'))
// }   

// module.exports = getCharDetail

const axios = require('axios')
const URL = "https://rickandmortyapi.com/api/character/";

const getCharDetail = async (charID) =>{
        const characterDetail = await axios.get(URL+charID)
        const { id,name,species,gender,origin,image} = characterDetail.data
        const newCharacter = {id,name,species,gender,origin,image}
        return newCharacter
}

module.exports = getCharDetail;
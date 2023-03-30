// const axios = require('axios')

// const getCharById = (res,ID) =>{
//     axios(`https://rickandmortyapi.com/api/character/${ID}`)
//     .then((response)=>{ 
//         const {data} = response
//         console.log(data);
//         const obj = {
//             id:data.id,
//             name:data.name,
//             image:data.image,
//             species:data.species,
//             gender:data.gender
//         }
//         res.writeHead(200,{ 'Content-type':'application/json'}).end(JSON.stringify(obj))
//     }
//     )
//     .catch(err=> res.writeHead(500,{'Content-type':'text/plain'}).end('Error de datos'))
// }


// module.exports = getCharById;

const axios = require('axios')
const URL = "https://rickandmortyapi.com/api/character/"

const getCharById = async (charID) =>{
    const character = await axios.get(URL+charID);
    const {id,name,gender,species,image} = character.data    
    const newCharacter = {id,name,gender,species,image}
    return newCharacter;

    // .then((data) =>{
    //         if(!data.name) throw Error('No se encuentra')
    //             console.log('TODO OK');
                
    //             const {id, name,species,image,gender} = data;
    //             res.status(200).json({id, name, species, gender , image}) 
    //         })}

    //         catch (error) {
    //             res.status(404).json({error: error.message})
    //         }
            
    }
    

module.exports = getCharById;
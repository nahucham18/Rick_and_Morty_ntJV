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

const getCharById = ( req, res) =>{
    const {id} = req.params
    axios.get(URL+id)
    .then(response => {
                const character = response.data
                const { id, name, species, gender, image} = character;
                res.status(200).json({id, name, species, gender , image})   
            })
    .catch(
        (error)=> {
        res.status(404).json({error: error.message})
    })
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
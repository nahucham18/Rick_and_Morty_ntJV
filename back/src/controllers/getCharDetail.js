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

const getCharDetail = ( req, res) =>{
    const {id} = req.params
    axios.get(URL+id)
    .then(response => {
                const { id, name, species, gender, image , origin} = response.data;
                res.status(200).json({id, name, species, gender , image ,origin})   
            })
    .catch(
        (error)=> {
        res.status(404).json({error: error.message})
    })

}

module.exports = getCharDetail;
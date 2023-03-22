const axios = require('axios')

const getCharById = (res,ID) =>{
    axios(`https://rickandmortyapi.com/api/character/${ID}`)
    .then((response)=>{ 
        const {data} = response
        console.log(data);
        const obj = {
            id:data.id,
            name:data.name,
            image:data.image,
            species:data.species,
            gender:data.gender
        }
        res.writeHead(200,{ 'Content-type':'application/json'}).end(JSON.stringify(obj))
    }
    )
    .catch(err=> res.writeHead(500,{'Content-type':'text/plain'}).end('Error de datos'))
}


module.exports = getCharById;
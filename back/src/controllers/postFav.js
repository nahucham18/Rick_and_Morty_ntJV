let fav = require('../utils/fav')

const postFav = (req, res) =>{
    const character = req.body
    const repetido = fav.find(fav => fav.id == character.id)
    try{
        if(repetido) throw Error ('Es repetido')
        fav.push(character)
        res.status(200).json(fav)
    }
    catch(error){
        res.status(404).json({error: error.message})
    }    

}

module.exports = postFav
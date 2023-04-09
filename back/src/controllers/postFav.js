const { Favorite } = require ('../DB_connection')

const postFav = async(name,origin,status,image,species,gender) =>{
    if(![name,origin,status,image,species,gender].every(Boolean))throw new Error('Faltan datos')

    const [fav, created] = await Favorite.findOrCreate({
        where:{name,origin,status,image,species,gender}
    })

    const favorites = await Favorite.findAll()
    
    return favorites

}

module.exports = postFav;
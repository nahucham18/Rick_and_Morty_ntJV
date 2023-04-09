const {Favorite} = require('../DB_connection')

const deleteFav = async(id) =>{
    const favorite = await Favorite.findByPk(id);
    await favorite.destroy()
    const favorites = Favorite.findAll()
    return favorites;
}

module.exports = deleteFav;
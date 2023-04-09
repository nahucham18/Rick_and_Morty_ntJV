const {Favorite} = require('../DB_connection')



const getFav =  async() =>{
        const favorites =  await Favorite.findAll()
        return favorites
}

module.exports = getFav;
let fav = require ('../utils/fav')

const deleteFav = (id) =>{
    const charDelete = fav.find(fav=> fav.id == id)
    if(!charDelete) throw new Error ('No existe character')

    fav = fav.filter(fav=> fav.id != id)
    return charDelete;
}

module.exports = deleteFav;
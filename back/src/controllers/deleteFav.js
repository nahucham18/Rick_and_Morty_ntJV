let fav = require('../utils/fav')

const deleteFav = (req,res) =>{
    const { id } = req.params;
    fav = fav.filter(fav => fav.id !== id)
    res.status(200).json(fav)
}

module.exports = deleteFav;
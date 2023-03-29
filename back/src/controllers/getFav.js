let fav = require ('../utils/fav')

const getFav = (req, res) =>{
        console.log('FAVORITOS');
        res.status(200).json(fav)
}

module.exports = getFav;
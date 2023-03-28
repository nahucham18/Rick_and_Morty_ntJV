let fav = require ('../utils/fav')

const getFav = (req, res) =>{
        res.status(200).join(fav)
}

module.exports = getFav;
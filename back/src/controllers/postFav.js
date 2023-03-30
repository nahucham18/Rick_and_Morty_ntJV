let fav = require('../utils/fav')

console.log(fav);

const postFav = (character) =>{
    const repetido = fav.find(fav => fav.id == character.id)
    if(repetido) throw Error ('Es repetido')
    fav.push(character)
    console.log(`FAV DE POST ${fav}`);
    return character

}

module.exports = postFav;
const { User } = require('../DB_connection')

const login =  async( email, password ) =>{
    if(!email || !password)throw new Error('Faltan datos')
    const usuario = await User.findOne({where:{ email }})
    if(!usuario)throw new Error('Usuario no encontrado')
    if(usuario.dataValues.password !== password)throw new Error('Contraseña incorrecta')
    return {access:true};
    
}   

module.exports = login
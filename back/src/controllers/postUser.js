const { User } = require('../DB_connection');

const postUser = async(email,password) =>{
    if(!email || !password)throw new Error('Faltan datos');
    const usuario = await User.findOne({where:{email:email}})
    if(usuario)throw new Error('Ya existe un usuario con ese Email')
    const newUser = await User.create({email, password})
    console.log(newUser);
    return newUser;
}

module.exports = postUser;
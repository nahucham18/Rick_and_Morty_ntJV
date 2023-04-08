const { User } = require('../DB_connection');

const postUser = async(email,password) =>{
    if(!email || !password)throw new Error('Faltan datos');
    const newUser = await User.create({email, password})
    return newUser;
}

module.exports = postUser;
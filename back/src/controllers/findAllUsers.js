const { User } = require('../DB_connection')

const findAllUsers = async() =>{
    const users = await User.findAll();
    return users;
}

module.exports = findAllUsers;
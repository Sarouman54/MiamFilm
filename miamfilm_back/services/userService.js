const { user } = require('../models/indexModel');

exports.getUser = async () => {

    try {
        return await user.findAll();
    } catch (error) {
        console.error(error);
        throw new Error('Error to get all users');
    }

}

exports.getUserById = async (id) => {

    try {
        return await user.findOne({
            where: {
                id: id
            }
        })
    } catch (error) {
        console.error(error);
        throw new Error('Error to get user by id');
    }

}

exports.getUserByEmail = async (email) => {

    try {
        return await user.findOne({
            where: {
                email: email
            }
        }) 
    } catch (error) {
        console.error(error);
        throw new Error('Error to get user by email');
    }

}

exports.addUser = async () => {

    try {
        
    } catch (error) {
        
    }

}

exports.deleteUserById = async (id) => {

    try {
        return await user.destroy({
          where: {
            id: id,
          },
        });
    } catch (error) {
        console.error(error);
        throw new Error('Error to delete user by id'); // Affichage de l'erreur "${error}"
    }
    
}
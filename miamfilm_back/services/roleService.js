const { role } = require('../models/indexModel');

exports.getRole = async () => {

    try {
        return await role.findAll();
    } catch (error) {
        console.error(error);
        throw new Error('Error to get all roles');
    }

}

exports.getRoleById = async (id) => {

    try {
        return await role.findOne({
            where: {
                id: id
            }
        })
    } catch (error) {
        console.error(error);
        throw new Error('Error to get role by id');
    }

}

exports.getRoleByName = async (name) => {

    try {
        return await role.findOne({
            where: {
                name: name
            }
        }) 
    } catch (error) {
        console.error(error);
        throw new Error('Error to get role by name');
    }

}

exports.addRole = async (name, description) => {

    try {
        var today = new Date();
        return await role.create({
            name: name,
            description: description,
            created_at: today,
            updated_at: today,
        })
    } catch (error) {
        console.error(error);
        throw new Error('Error to add role');
    }

}

exports.updateRoleById = async (id, name, description) => {

    try {
        var today = new Date();
        return await role.update(
            {
                name: name,
                description: description,
                updated_at: today,
            }, 
            {where: {id: id}}
        );
    } catch (error) {
        console.error(error);
        throw new Error('Error to update role');
    }

}

exports.deleteRoleById = async (id) => {

    try {
        return await role.destroy({
          where: {
            id: id,
          },
        });
    } catch (error) {
        console.error(error);
        throw new Error('Error to delete role by id'); // Affichage de l'erreur "${error}"
    }
    
}
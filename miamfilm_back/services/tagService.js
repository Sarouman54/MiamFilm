const { tag } = require('../models/indexModel');

exports.getTag = async () => {

    try {
        return await tag.findAll(); 
    } catch (error) {
        console.error(error);
        throw new Error('Error to get all tags');
    }
    
}

exports.getTagById = async (id) => {

    try {
        return await tag.findOne({
            where: {
                id: id
            }
        }) 
    } catch (error) {
        console.error(error);
        throw new Error('Error to get tag by id');
    }

}

exports.getTagByName = async (name) => {

    try {
        return await tag.findOne({
            where: {
                name: name
            }
        })
    } catch (error) {
        console.error(error);
        throw new Error('Error to get tag by name');
    }

}

exports.getIdTagByName = async (name) => {

    return await tag.findOne({
        where: {
            name: name
        },
    })
}

exports.addTag = async (name, color) => {

    try {
        var today = new Date();
        return await tag.create({
            name: name,
            color: color,
            created_at: today,
            updated_at: today,
        });
    } catch (error) {
        console.error(error);
        throw new Error('Error to add tag');
    }

}

exports.updateTagById = async (id, name, color) => {

    try {
        var today = new Date();
        return await tag.update(
            {
                name: name,
                color: color,
                updated_at: today,
            }, 
            {where: {id: id}}
        );
    } catch (error) {
        console.error(error);
        throw new Error('Error to update tag');
    }

}

exports.deleteTagById = async (id) => {

    try {
        return await tag.destroy({
            where: {
              id: id,
            },
        });
    } catch (error) {
        console.error(error);
        throw new Error('Error to delete tag');
    }

}
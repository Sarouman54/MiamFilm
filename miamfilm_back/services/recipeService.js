const { recipe } = require('../models/indexModel');

exports.getRecipe = async () => {

    try {
        return await recipe.findAll();
    } catch (error) {
        console.error(error);
        throw new Error('Error to get all recipes');
    }

}

exports.getRecipeById = async (id) => {

    try {
        return await recipe.findOne({
            where: {
                id: id
            }
        })
    } catch (error) {
        console.error(error);
        throw new Error('Error to get recipe by id');
    }

}

exports.getRecipeByTitle = async (title) => {

    try {
        return await recipe.findOne({
            where: {
                title: title
            }
        })
    } catch (error) {
        console.error(error);
        throw new Error('Error to get recipe by title');
    }

}

exports.addRecipe = async (title, persons, preparationTime, bakingTime, ingredients, picture, description) => {

    try {
        var today = new Date(); // Utiliser toLocaleString('fr-FR') pour afficher au fuseau horaire français
        return await recipe.create({
            title: title,
            persons: persons,
            preparation_time: preparationTime,
            baking_time: bakingTime,
            ingredients: ingredients,
            picture: picture,
            description: description,
            created_at: today,
            updated_at: today,
            id_user: 1,
        });
    } catch (error) {
        console.error(error);
        throw new Error('Error to add recipe');
    }

}

exports.updateRecipeById = async (id, title, persons, preparationTime, bakingTime, ingredients, picture, description) => {

    try {
        var today = new Date();
        return await recipe.update(
            {
                title: title,
                persons: persons,
                preparation_time: preparationTime,
                baking_time: bakingTime,
                ingredients: ingredients,
                picture: picture,
                description: description,
                updated_at: today,
            }, 
            {where: {id: id}}
        );
    } catch (error) {
        console.error(error);
        throw new Error('Error to update recipe');
    }

}

exports.deleteRecipeById = async (id) => {

    try {
        return await recipe.destroy({
            where: {
              id: id,
            },
        });
    } catch (error) {
        console.error(error);
        throw new Error('Error to delete recipe');
    }

}
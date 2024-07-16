const recipeService = require('../services/recipeService');
const createError = require('http-errors');

exports.getAllRecipe = async (req, res, next) => {
    const recipes = await recipeService.getRecipe();
    if(recipes) {
        res.json({ data: recipes });
    } else {
        next(createError(404, "Error no recipe found"));
    }
}

exports.getRecipeById = async (req, res, next) => {
    const recipe = await recipeService.getRecipeById(req.params.id);
    if(recipe) {
        res.json({ data: recipe });
    } else {
        next(createError(404, "Error no recipe found for this id"));
    }
}

exports.getRecipeByTitle = async (req, res, next) => {
    const recipe = await recipeService.getRecipeByTitle(req.params.name);
    if(recipe) {
        res.json({ data: recipe });
    } else {
        next(createError(404, "Error no recipe found for this name"));
    }
}

exports.addRecipe = async (req, res, next) => {
    const recipe = await recipeService.addRecipe(req.body.userId, req.body.title, req.body.persons, req.body.preparationTime, req.body.ingredients, req.body.picture, req.body.description, req.body.difficulty, req.body.note);
    if(recipe) {
        res.status(201).json({id: recipe.id});
    } else {
        next(createError(404, "Error when creating this recipe"));
    }
}

exports.updateRecipeById = async (req, res, next) => {
    recipeService.updateRecipeById(req.params.id, req.body.title, req.body.persons, req.body.preparation_time, req.body.ingredients, req.body.picture, req.body.description, req.body.difficulty, req.body.note)
    .then(recipe => res.status(200).json({ status: "succès", message: "Recette modifiée avec succès", data: recipe }))
    .catch(error => res.status(400).json({ status: "échec", message: "Impossible de modifier la recette", error: error }));
}

exports.deleteRecipeById = (req, res, next) => {
    try {
        recipeService.deleteRecipeById(req.params.id)
        res.status(204).send()
    } catch(e) {
    next(createError(404, 'Recipe not found'));
    }
}
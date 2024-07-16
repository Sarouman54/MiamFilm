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
    const recipe = await recipeService.addRecipe(req.body.title, req.body.persons, req.body.preparationTime, req.body.bakingTime, req.body.ingredients, req.body.picture);
    if(recipe) {
        res.status(201).json({id: recipe.id});
    } else {
        next(createError(404, "Error when creating this recipe"));
    }
}

exports.updateRecipe = async (req, res, next) => {
    
}

exports.deleteRecipeById = (req, res, next) => {
    try {
        recipeService.deleteRecipeById(req.params.id)
        res.status(204).send()
    } catch(e) {
    next(createError(404, 'Recipe not found'));
    }
}
const express = require('express'),
router = express.Router(),
recipeController = require('../controllers/recipeController')

router.get('/', recipeController.getAllRecipe);
router.get('/:id', recipeController.getRecipeById);
router.get('/title/:title', recipeController.getRecipeByTitle);

router.post('/', recipeController.addRecipe);

router.put('/:id', recipeController.updateRecipeById);

router.delete('/:id', recipeController.deleteRecipeById);

module.exports = router;
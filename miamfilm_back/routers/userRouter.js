const express = require('express'),
router = express.Router(),
userController = require('../controllers/userController')

router.get('/', userController.getAllUser);
router.get('/:id', userController.getUserById);
router.get('/email/:email', userController.getUserByEmail);
// Voir pour ajouter une route récupérant tous les commentaires d'un utilisateur

router.post('/', userController.addUser);

router.put('/', userController.updateUser);

router.delete('/:id', userController.deleteUserById);

module.exports = router;
const express = require('express'),
router = express.Router(),
commentController = require('../controllers/commentController')

router.get('/', commentController.getAllComment);
router.get('/:id', commentController.getCommentById);
router.get('/video/:id', commentController.getCommentByVideoId);
// Voir pour ajouter une route récupérant tous les commentaires d'un utilisateur

router.post('/', commentController.addComment);

router.put('/:id', commentController.updateCommentById);

router.delete('/:id', commentController.deleteCommentById);

module.exports = router;
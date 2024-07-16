const express = require('express'),
router = express.Router(),
tagController = require('../controllers/tagController')

router.get('/', tagController.getAllTag);
router.get('/:id', tagController.getTagById);
router.get('/name/:name', tagController.getTagByName);

router.post('/', tagController.addTag);

router.put('/:id', tagController.updateTagById);

router.delete('/:id', tagController.deleteTagById);

module.exports = router;
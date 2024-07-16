const express = require('express'),
router = express.Router(),
videoController = require('../controllers/videoController')

router.get('/', videoController.getAllVideo);
router.get('/:id', videoController.getVideoById);
router.get('/title/:title', videoController.getVideoByTitle);

router.post('/', videoController.addVideo);

router.put('/', videoController.updateVideo);

router.delete('/:id', videoController.deleteVideoById);

module.exports = router;
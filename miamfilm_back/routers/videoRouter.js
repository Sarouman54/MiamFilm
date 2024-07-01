const express = require('express'),
    router = express.Router(),
    videoController = require('../controllers/videoController')
    // authMiddleware = require('../middlewares/authMiddleware')

router.get('/', videoController.getAllVideo);
router.get('/:title', videoController.getVideoByTitle);
router.get('/:id', videoController.getVideoById);

router.post('/', videoController.addVideo);

module.exports = router;
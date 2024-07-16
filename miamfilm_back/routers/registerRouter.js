const express = require('express'),
    router = express.Router(),
    registerController = require('../controllers/registerController')

router.post('/signUp', registerController.signUp)
router.post('/register', registerController.signIn)

module.exports = router
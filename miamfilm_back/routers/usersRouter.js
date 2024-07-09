import express from 'express';
router = express.Router();
usersController = require('../controllers/usersController')


router.get('/', usersController.getUsers) 
router.post('/', usersController.addUser)
router.put('/', usersController.putUser)
router.get('/:id', usersController.getUserById)
router.delete('/', usersController.deleteUserById)

export default router

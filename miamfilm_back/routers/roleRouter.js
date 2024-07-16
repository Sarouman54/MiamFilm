const express = require('express'),
router = express.Router(),
roleController = require('../controllers/roleController')

router.get('/', roleController.getAllRole);
router.get('/:id', roleController.getRoleById);
router.get('/name/:name', roleController.getRoleByName);

router.post('/', roleController.addRole);

router.put('/:id', roleController.updateRoleById);

router.delete('/:id', roleController.deleteRoleById);

module.exports = router;
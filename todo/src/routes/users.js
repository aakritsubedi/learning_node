const router = require('express').Router();

const userController = require('../controllers/users');

router.get('/', userController.fetchUsers);
router.get('/:id', userController.fetchUserById);
router.post('/', userController.createUser);
router.put('/:id', userController.updateUser);
router.delete("/:id", userController.deleteUser);

module.exports = router;

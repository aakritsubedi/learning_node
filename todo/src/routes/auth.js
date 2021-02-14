const router = require('express').Router();

const authController = require('../controllers/auth');

router.post('/', authController.login);

module.exports = router;

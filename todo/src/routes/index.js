const router = require('express').Router();

const userRouter = require('./users');
const todoRouter = require('./todo');
const authRouter = require('./auth');

const authenticate = require('../middleware/authenticate');

router.use('/users', authenticate, userRouter);
router.use('/todos', authenticate, todoRouter);
router.use('/login', authRouter);

// Display Basic App Information
router.get("/", (req, res) => {
  res.status(200).json({
    name: "TODO",
    version: "1.0.0",
  });
});

module.exports = router;

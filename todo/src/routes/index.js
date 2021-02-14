const router = require('express').Router();

const userRouter = require('./users');
const todoRouter = require('./todo');

router.use('/users', userRouter);
router.use('/todos', todoRouter);

// Display Basic App Information
router.get("/", (req, res) => {
  res.status(200).json({
    name: "TODO",
    version: "1.0.0",
  });
});

module.exports = router;

const router = require('express').Router();

const userRouter = require('./users');

router.use('/users', userRouter);

// Display Basic App Information
router.get("/api", (req, res) => {
  res.status(200).json({
    name: "TODO",
    version: "1.0.0",
  });
});

module.exports = router;

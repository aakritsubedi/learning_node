const router = require('express').Router();

const todoController = require('../controllers/todo');

router.get('/', todoController.fetchTodos);
router.get('/:id', todoController.fetchTodoById);
router.post('/', todoController.createTodo);
router.put('/:id', todoController.updateTodo);
router.delete("/:id", todoController.deleteTodo);

module.exports = router;

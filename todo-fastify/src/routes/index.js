const todoController = require('../controllers/todo.controller');

const routes = [
  {
    method: 'GET',
    url: '/api/todo',
    handler: todoController.getTodos
  },
  {
    method: 'POST',
    url: '/api/todo',
    handler: todoController.addTodo
  },
  {
    method: 'GET',
    url: '/api/todo/:id',
    handler: todoController.getTodoById
  },
  {
    method: 'PUT',
    url: '/api/todo/:id',
    handler: todoController.updateTodo
  },
  {
    method: 'DELETE',
    url: '/api/todo/:id',
    handler: todoController.deleteTodo
  }
]

module.exports = routes;

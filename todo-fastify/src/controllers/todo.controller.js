const todoService = require('../services/todo.service');

const getTodos = async (request, reply) => {
  const todos = await todoService.getTodos();

  reply.send(todos);
}

const getTodoById = async (request, reply) => {
  const id = request.params.id;

  const todo = await todoService.getTodoById(id);

  reply.send(todo);
}

const addTodo = async (request, reply) => {
  const todo = request.body;

  const newTodo = await todoService.addTodo(todo);

  return newTodo;
}

const updateTodo = async (request, reply) => {
  const id = request.params.id;
  const updatedTodo = request.body;

  const todo = await todoService.updateTodo(id, updatedTodo);
  
  return todo;
}

const deleteTodo = async (request, reply) => {
  const id = request.params.id;

  const todo = todoService.deleteTodo(id);

  return todo;
}

module.exports = {
  getTodos,
  getTodoById,
  addTodo,
  updateTodo,
  deleteTodo
}
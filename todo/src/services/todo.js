const todoModel = require("../model/todo");

const createTodo = async (todo) => {
  const todoResponse = await todoModel.createTodo(todo);

  return todoResponse;
};

const fetchTodos = async (userId) => {
  const todoResponse = await todoModel.fetchTodos(userId);

  return todoResponse;
};

const fetchTodoById = async (id, userId) => {
  const todoResponse = await todoModel.fetchTodoById(id, userId);

  return todoResponse;
};

const updateTodo = async (id, todo) => {
  const todoResponse = await todoModel.updateTodo(id, todo);

  return todoResponse;
};

const deleteTodo = async (id) => {
  const todoResponse = await todoModel.deleteTodo(id);

  return todoResponse;
};

module.exports = {
  createTodo,
  fetchTodos,
  fetchTodoById,
  updateTodo,
  deleteTodo,
};

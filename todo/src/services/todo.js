const todoModel = require("../model/todo");

const createTodo = async (todo) => {
  const todoResponse = await todoModel.createTodo(todo);

  return todoResponse;
};

const fetchTodos = async () => {
  const todoResponse = await todoModel.fetchTodos();

  return todoResponse;
};

const fetchTodoById = async (id) => {
  const todoResponse = await todoModel.fetchTodoById(id);

  return todoResponse;
};

const updateTodo = async (id, todo) => {
  const todoResponse = await todoModel.updateTodo(id, todo);

  return todoResponse;
};

const deleteTodo = async (id) => {
  const todoResponse = await todoModel.deleteTodo(id);

  return todoResponse;
}

module.exports = {
  createTodo,
  fetchTodos,
  fetchTodoById,
  updateTodo,
  deleteTodo
};

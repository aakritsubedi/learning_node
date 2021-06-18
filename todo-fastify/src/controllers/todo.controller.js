const { getTodos, getTodoById, addTodo, updateTodo, deleteTodo } = require('./services/todo.service');

const getTodos = async (request, reply) => {
  const todos = await getTodos();

  return todos;
}

const getTodoById = async (request, reply) => {
  const id = request.params.id;

  const todo = await getTodoById(id);

  return todo;
}

const addTodo = async (request, reply) => {
  const todo = request.body;

  const todo = await addTodo(todo);

  return todo;
}

const updateTodo = async (request, reply) => {
  const id = request.params.id;
  const updatedTodo = request.body;

  const todo = await updateTodo(id, updatedTodo);
  
  return todo;
}

const deleteTodo = async (request, reply) => {
  const id = request.params.id;

  const todo = deleteTodo(id);

  return todo;
}

module.exports = {
  getTodos,
  getTodoById,
  addTodo,
  updateTodo,
  deleteTodo
}
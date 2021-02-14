const todoService = require("../services/todo");

const createTodo = async (req, res, next) => {
  const todo = req.body;

  try {
    const todoResponse = await todoService.createTodo(todo);

    res.status(200).json(todoResponse);
  } catch (err) {
    next("Unable to add todo task.");
  }
};

const fetchTodos = async (req, res, next) => {
  try {
    const todoResponse = await todoService.fetchTodos();

    res.status(200).json(todoResponse);
  } catch (err) {
    next("Unable to fetch all todo tasks.");
  }
};

const fetchTodoById = async (req, res, next) => {
  const id = req.params.id;

  try {
    const todoResponse = await todoService.fetchTodoById(id);

    res.status(200).json(todoResponse);
  } catch (err) {
    next(`Unable to fetch todo with id ${id}.`);
  }
};

const updateTodo = async (req, res, next) => {
  const id = req.params.id;
  const todo = req.body;

  // try {
    const todoResponse = await todoService.updateTodo(id, todo);

    res.status(200).json(todoResponse);
  // } catch (err) {
  //   next(`Unable to update todo of id ${id}.`);
  // }
};

const deleteTodo = async (req, res, next) => {
  const id = req.params.id;

  try {
    const todoResponse = await todoService.deleteTodo(id);

    res.status(200).json(todoResponse);
  } catch (err) {
    next(`Unable to delete todo id ${id}.`);
  }
};

module.exports = {
  createTodo,
  fetchTodos,
  fetchTodoById,
  updateTodo,
  deleteTodo
};

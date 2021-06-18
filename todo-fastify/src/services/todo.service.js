const Todo = require("../models/Todo");

const getTodos = async () => {
  try {
    const todos = await Todo.find();

    return todos;
  } catch (err) {
    throw err;
  }
};

const getTodoById = async (id) => {
  try {
    const todo = await Todo.findById(id);

    return todo;
  } catch (err) {
    throw err;
  }
};

const addTodo = async (todo) => {
  try {
    const todo =  new Todo(todo);
    todo.save();

    return todo;
  }
  catch (err) {
    throw err;
  }
}

const updateTodo = async (id, todo) => {
  try {
    const {...updatedTodo} =  todo;
    const update = Todo.findByIdAndUpdate(id, updatedTodo, { new: true });

    return update;
  }
  catch (err) {
    throw err;
  }
}

const deleteTodo = async (id) => {
  try {
    const todo = await Todo.findByIdAndDelete(id);

    return todo;
  }
  catch (err) {
    throw err;
  }
}

module.exports = {
  getTodos,
  getTodoById,
  addTodo,
  updateTodo,
  deleteTodo
}

const db = require("../db");
const createResponse = require("../utils/createResponse");

// a utility function to filter the filter the todos based on userId
const filterByUserId = (userId, todos) => {
  return todos.filter((todo) => todo.user_id === userId);
};

// authorize the user to perform various HTTP methods
const isAuthorize = (userId, todo) => {
  if (todo.user_id === userId) {
    return true;
  } else {
    return false;
  }
};

const createTodo = async ({ title, description, date, userId }) => {
  const sql = `INSERT INTO todos(title, description, date, user_id) VALUES('${title}','${description}', '${date}', ${userId})`;

  const todoResponse = await db.raw(sql);
  if (todoResponse) {
    return createResponse("success", "Todo added successfully.");
  }

  return createResponse("failed", "Unable to add todo.");
};

const fetchTodos = async (userId) => {
  const sql = "SELECT * FROM todos";

  const todoResponse = await db.raw(sql);
  if (todoResponse) {
    return createResponse("success", filterByUserId(userId, todoResponse.rows));
  }

  return createResponse("failed", "Unable to fetch all todos.");
};

const fetchTodoById = async (id, userId) => {
  const sql = `SELECT * FROM todos WHERE id =${id}`;

  const todoResponse = await db.raw(sql);
  if (todoResponse) {
    if (isAuthorize(todoResponse.rows[0], userId)) {
      return createResponse("success", todoResponse.rows);
    }

    return createResponse(
      "failed",
      `Unauthorized resources. Unable to access todo with id ${id}.`
    );
  }

  return createResponse("failed", `Unable to fetch todo by id ${id}.`);
};

const updateTodo = async (id, todo) => {
  let data = "";
  let count = 0;
  for (const [key, value] of Object.entries(todo)) {
    count++;
    if (count === Object.keys(todo).length) {
      data += isNaN(value) ? `${key} = '${value}' ` : `${key} = ${value} `;
    } else {
      data += isNaN(value) ? `${key} = '${value}', ` : `${key} = ${value}, `;
    }
  }

  const sql = `UPDATE todos SET ${data} WHERE id = ${id}`;
  const todoResponse = await db.raw(sql);
  if (todoResponse) {
    return createResponse("success", "Todo data updated successfully.");
  }

  return createResponse("failed", `Unable to update todo of id ${id}.`);
};

const deleteTodo = async (id) => {
  const sql = `DELETE FROM todos WHERE id = ${id}`;
  const todoResponse = await db.raw(sql);
  if (todoResponse) {
    return createResponse("success", "Todo data deleted successfully.");
  }

  return createResponse("failed", `Unable to delete todo of id ${id}.`);
};

module.exports = {
  createTodo,
  fetchTodos,
  fetchTodoById,
  updateTodo,
  deleteTodo,
};

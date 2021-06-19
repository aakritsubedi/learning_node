const todoController = require("../controllers/todo.controller");

const routes = [
  {
    method: "GET",
    url: "/api/todo",
    schema: {
      response: {
        200: {
          type: "array",
          properties: {
            title: { type: "string" },
            isCompleted: { type: "boolean" },
          },
        },
      },
    },
    handler: todoController.getTodos,
  },
  {
    method: "POST",
    url: "/api/todo",
    schema: {
      body: {
        _id: { type: "string" },
        title: { type: "string" },
        description: { type: "string" },
        date: { type: "string" },
        isCompleted: { type: "boolean" },
        status: { type: "integer", minimum: 0, maximum: 1 },
      },
      response: {
        200: {
          type: "object",
          required: ['title'],
          properties: {
            isCompleted: { type: "boolean" },
            title: { type: "string" },
          },
        },
      },
    },
    handler: todoController.addTodo,
  },
  {
    method: "GET",
    url: "/api/todo/:id",
    schema: {
      params: {
        id: { type: "string" },
      },
      response: {
        200: {
          type: "object",
          properties: {
            _id: { type: "string" },
            title: { type: "string" },
            description: { type: "string" },
            date: { type: "string" },
          },
        },
      },
    },
    handler: todoController.getTodoById,
  },
  {
    method: "PUT",
    url: "/api/todo/:id",
    schema: {
      params: {
        id: { type: "string" },
      },
      body: {
        _id: { type: "string" },
        title: { type: "string" },
        description: { type: "string" },
        date: { type: "string" },
        isCompleted: { type: "boolean" },
        status: { type: "integer" },
      },
      response: {
        200: {
          type: "object",
          properties: {
            title: { type: "string" },
          },
        },
      },
    },
    handler: todoController.updateTodo,
  },
  {
    method: "DELETE",
    url: "/api/todo/:id",
    schema: {
      params: {
        id: { type: "string" },
      },
      response: {
        200: {
          type: "object",
          properties: {
            title: { type: "string" },
          },
        },
      },
    },
    handler: todoController.deleteTodo,
  },
];

module.exports = routes;

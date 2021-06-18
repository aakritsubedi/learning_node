const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  title: String,
  description: String,
  date: Date,
  isCompleted: Boolean,
  status: Boolean,
});

module.exports = mongoose.model('Todo', todoSchema);

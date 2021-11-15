const express = require('express');
const router = express.Router();
const { getTodo, addTodo, updateTodo, deleteTodo } = require("../services/databaseService");

router.get('/', function(req, res) {
  const todos = getTodo();
  res.send(todos);
});

router.post('/', function(req, res) {
  const todoText = req.body.text;
  const result = addTodo(todoText);
  res.send(result);
});

router.put('/:id', function(req, res) {
  const todoId = parseInt(req.params.id);
  const todoText = req.body.text;
  const isCompleted = req.body.isCompleted;
  const result = updateTodo(todoId, todoText, isCompleted);
  res.send(result);
});

router.delete('/:id', function(req, res) {
  const todoId = parseInt(req.params.id);
  const result = deleteTodo(todoId);
  res.send(result);
});

module.exports = router;

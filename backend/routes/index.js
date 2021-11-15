const express = require('express');
const router = express.Router();

const db = require("../db");
const { getTodo, addTodo, updateTodo, deleteTodo } = require("../services/databaseService");

router.get('/', function(req, res) {
  /* 
  SQL-Equivalent:
    SELECT *
    FROM TODO
  */
  const todos = getTodo();
  res.send(todos);
});

router.post('/', function(req, res) {
  /* 
  SQL-Equivalent:
    INSERT INTO TODO (text, isCompleted)
    VALUES (text, false)
  */
  const todoText = req.body.text;
  
  const result = addTodo(todoText);
  res.send(result);
});

router.put('/:id', function(req, res) {
  const todoId = parseInt(req.params.id);
  const todoText = req.body.text;
  const isCompleted = req.body.isCompleted;

  /* 
  SQL-Equivalent:
    UPDATE TODO
    SET isCompleted = true
    WHERE id = todoId;
  */
  const result = updateTodo(todoId, todoText, isCompleted);
  res.send(result);
});

router.delete('/:id', function(req, res) {
  const todoId = parseInt(req.params.id);

  /* 
  SQL-Equivalent:
    DELETE FROM TODO 
    WHERE id = todoId;
  */
  const result = deleteTodo(todoId);
  res.send(result);
});

module.exports = router;

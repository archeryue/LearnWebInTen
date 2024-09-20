import * as todoService from '../service/todoService.js';

export const getAllTodos = (req, res) => {
  const todos = todoService.getAllTodos();
  res.json(todos);
};

export const createTodo = (req, res) => {
  const newTodo = todoService.createTodo(req.body);
  res.status(201).json(newTodo);
};

export const getTodoById = (req, res) => {
  const todo = todoService.getTodoById(req.params.id);
  if (todo) {
    res.json(todo);
  } else {
    res.status(404).json({ message: 'Todo not found' });
  }
};

export const updateTodo = (req, res) => {
  const updatedTodo = todoService.updateTodo(req.params.id, req.body);
  if (updatedTodo) {
    res.json(updatedTodo);
  } else {
    res.status(404).json({ message: 'Todo not found' });
  }
};

export const deleteTodo = (req, res) => {
  const success = todoService.deleteTodo(req.params.id);
  if (success) {
    res.status(204).end();
  } else {
    res.status(404).json({ message: 'Todo not found' });
  }
};
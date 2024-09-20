let todos = [
    { id: 0, text: 'coding: vue project todo-list', 
        done: true, today: true, important: true },
    { id: 1, text: 'reading: walden', 
        done: false, today: true, important: false },
    { id: 2, text: 'working: prepare jd', 
        done: false, today: false, important: false },
];
let nextId = 3;

export const getAllTodos = () => {
  return todos;
};

export const createTodo = (todoData) => {
  const newTodo = { id: nextId++, ...todoData };
  todos.push(newTodo);
  return newTodo;
};

export const getTodoById = (id) => {
  return todos.find(todo => todo.id === parseInt(id));
};

export const updateTodo = (id, todoData) => {
  const index = todos.findIndex(todo => todo.id === parseInt(id));
  if (index !== -1) {
    todos[index] = { ...todos[index], ...todoData };
    return todos[index];
  }
  return null;
};

export const deleteTodo = (id) => {
  const initialLength = todos.length;
  todos = todos.filter(todo => todo.id !== parseInt(id));
  return todos.length < initialLength;
};
// TaskContext.jsx
import React, { createContext, useState, useEffect } from 'react';

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem('todos');
    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (newTodo) => {
    const todoToAdd = {
      id: Date.now(),
      task: newTodo.task,
      priority: newTodo.priority,
      dueDate: newTodo.selectedDate,
      completed: false,
      deleted: false,
      pinned: false,
    };
    setTodos(prevTodos => [...prevTodos, todoToAdd]);
  };

  const deleteTodo = (id) => {
    setTodos(prevTodos => prevTodos.map(todo => 
      todo.id === id ? { ...todo, deleted: true } : todo
    ));
  };

  const togglePinTodo = (id) => {
    setTodos(prevTodos => prevTodos.map(todo => 
      todo.id === id ? { ...todo, pinned: !todo.pinned } : todo
    ));
  };

  const isTodoChecked = (id) => {
    return todos.find(todo => todo.id === id)?.completed || false;
  };

  const toggleCheck = (id) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const getTodoDueDate = (id) => {
    const todo = todos.find(todo => todo.id === id);
    return todo?.dueDate ? new Date(todo.dueDate).toDateString() : null;
  };

  const getTodoPriority = (id) => {
  const todo = todos.find(todo => todo.id === id);
  return todo ? todo.priority : null;
};

  return (
    <TaskContext.Provider value={{ 
      todos, 
      addTodo, 
      deleteTodo,
      togglePinTodo,
      isTodoChecked, 
      toggleCheck,
      getTodoDueDate, 
      getTodoPriority 
    }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContext;
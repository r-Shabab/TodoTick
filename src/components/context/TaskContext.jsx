// TaskContext.jsx
import React, { createContext, useState, useEffect } from "react";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
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
    setTodos((prevTodos) => [...prevTodos, todoToAdd]);
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id
          ? { ...todo, deleted: true, deletedAt: Date.now() }
          : todo,
      ),
    );

    // Set a timeout to permanently delete the task after 10 minutes
    setTimeout(
      () => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
      },
      10 * 60 * 1000,
    ); // 10 minutes in milliseconds
  };

  const undoDelete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, deleted: false, deletedAt: null } : todo,
      ),
    );
  };

  const togglePinTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, pinned: !todo.pinned } : todo,
      ),
    );
  };

  const isTodoChecked = (id) => {
    return todos.find((todo) => todo.id === id)?.completed || false;
  };

  const isTodoDeleted = (id) => {
    return todos.find((todo) => todo.id === id)?.deleted || false;
  };

  const toggleCheck = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              completed: !todo.completed,
              completedAt: todo.completed ? null : Date.now(),
            }
          : todo,
      ),
    );
  };

  const moveToCompleted = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, movedToCompleted: true } : todo,
      ),
    );
  };

  const getTodoDueDate = (id) => {
    const todo = todos.find((todo) => todo.id === id);
    return todo?.dueDate ? new Date(todo.dueDate).toDateString() : null;
  };

  const getTodoPriority = (id) => {
    const todo = todos.find((todo) => todo.id === id);
    return todo ? todo.priority : null;
  };

  return (
    <TaskContext.Provider
      value={{
        todos,
        addTodo,
        deleteTodo,
        undoDelete,
        togglePinTodo,
        isTodoChecked,
        moveToCompleted,
        isTodoDeleted,
        toggleCheck,
        getTodoDueDate,
        getTodoPriority,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContext;

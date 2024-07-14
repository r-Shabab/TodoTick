import { createContext, useState, useCallback } from "react";
import { v4 as uuidv4 } from "uuid";
const TaskContext = createContext();

// eslint-disable-next-line react/prop-types
export const TaskProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const formatDateToString = (date) => {
    if (!date) return null;
    const d = new Date(date);
    return d
      .toLocaleDateString("en-GB", { day: "numeric", month: "long" })
      .split(" ")
      .join(" ");
  };

  const addTodo = useCallback((newTodo) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      {
        ...newTodo,
        id: uuidv4(),
        isChecked: false,
        isPinned: false,
        priority: null,
        dueDate: formatDateToString(newTodo.dueDate),
        dateCreated: formatDateToString(new Date()),
      },
    ]);
  }, []);

  const deleteTodo = useCallback((id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }, []);

  const toggleCheck = useCallback((id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isChecked: !todo.isChecked } : todo,
      ),
    );
  }, []);

  const togglePinned = useCallback((id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isPinned: !todo.isPinned } : todo,
      ),
    );
  }, []);

  const setDueDate = useCallback((id, dueDate) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, dueDate: dueDate } : todo,
      ),
    );
  }, []);

  const setPriority = useCallback((id, priority) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, priority: priority } : todo,
      ),
    );
  }, []);

  const getTodobyId = useCallback(
    (id) => {
      return todos.find((todo) => todo.id === id);
    },
    [todos],
  );

  const isTodoChecked = useCallback(
    (id) => {
      const todo = todos.find((todo) => todo.id === id);
      return todo ? todo.isChecked : false;
    },
    [todos],
  );

  const isTodoPinned = useCallback(
    (id) => {
      const todo = todos.find((todo) => todo.id === id);
      return todo ? todo.isPinned : false;
    },
    [todos],
  );

  const getTodoPriority = useCallback(
    (id) => {
      const todo = todos.find((todo) => todo.id === id);
      return todo ? todo.priority : null;
    },
    [todos],
  );

  const getPriorityColor = useCallback((priority) => {
    switch (priority) {
      case "low":
        return "blue";
      case "medium":
        return "yellow";
      case "high":
        return "red";
      default:
        return "gray"; // Default color when no priority is set
    }
  }, []);

  const getTodoDueDate = useCallback(
    (id) => {
      const todo = todos.find((todo) => todo.id === id);
      return todo ? todo.dueDate : null;
    },
    [todos],
  );

  const getTodoCreatedDate = useCallback(
    (id) => {
      const todo = todos.find((todo) => todo.id === id);
      return todo ? todo.dateCreated : null;
    },
    [todos],
  );

  return (
    <TaskContext.Provider
      value={{
        todos,
        addTodo,
        deleteTodo,
        toggleCheck,
        togglePinned,
        setDueDate,
        setPriority,
        getTodobyId,
        isTodoChecked,
        isTodoPinned,
        getTodoPriority,
        getPriorityColor,
        getTodoDueDate,
        getTodoCreatedDate,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContext;

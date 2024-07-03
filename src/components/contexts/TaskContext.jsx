import { createContext, useState } from "react";

const TaskContext = createContext({
  taskId: "",
  isChecked: false,
  setIsChecked: () => {},
});

// eslint-disable-next-line react/prop-types
export const TaskProvider = ({ children, taskId }) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <TaskContext.Provider value={{ taskId, isChecked, setIsChecked }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContext;

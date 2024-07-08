import { createContext, useState } from "react";

const TaskContext = createContext();

// eslint-disable-next-line react/prop-types
export const TaskProvider = ({ children, taskId }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isPinned, setIsPinned] = useState(false);
  const priorities = [
    { label: "Low", value: "Low", color: "border-color-low-priority" },
    { label: "Medium", value: "Medium", color: "border-color-med-priority" },
    { label: "High", value: "High", color: "border-color-high-priority" },
  ];

  return (
    <TaskContext.Provider
      value={{
        taskId,
        isChecked,
        setIsChecked,
        isPinned,
        setIsPinned,
        priorities,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContext;

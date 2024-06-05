// Task.jsx

import { TaskProvider } from "./TaskContext";
import Indicator from "./Indicator";
import Label from "./Label";

// eslint-disable-next-line react/prop-types
const Task = ({ taskId, children }) => {
  return (
    <div className="flex items-center">
      <TaskProvider taskId={taskId}>
        <div className="relative flex items-center">
          <Indicator />
        </div>
        <Label>{children}</Label>
      </TaskProvider>
    </div>
  );
};

export default Task;

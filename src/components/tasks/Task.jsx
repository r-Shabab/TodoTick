// Task.jsx
import { TaskProvider } from "./TaskContext";
import Checkbox from "./Checkbox";
import Label from "./Label";
import Edit from "../common/buttons/Edit";
import Delete from "../common/buttons/Delete";

// eslint-disable-next-line react/prop-types
const Task = ({ taskId, children }) => {
  return (
    <div className="flex w-full items-center space-x-2">
      <TaskProvider taskId={taskId}>
        <div className="relative flex items-center">
          <Checkbox />
        </div>

        <div className="group relative flex w-full items-center justify-between">
          <Label>{children}</Label>
          <div className="absolute right-2 hidden items-center space-x-6 p-2 duration-700 ease-in-out group-hover:flex">
            <Edit />
            <Delete />
          </div>
        </div>
      </TaskProvider>
    </div>
  );
};

export default Task;

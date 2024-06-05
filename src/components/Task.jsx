// Task.jsx
import { TaskProvider } from "./TaskContext";
import Indicator from "./Indicator";
import Label from "./Label";
import { AiFillDelete } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
// eslint-disable-next-line react/prop-types
const Task = ({ taskId, children }) => {
  return (
    <div className="flex w-full items-center space-x-2">
      <TaskProvider taskId={taskId}>
        <div className="relative flex items-center">
          <Indicator />
        </div>

        <div className="group flex w-full items-center justify-between">
          <Label>{children}</Label>
          <div className="hidden items-center space-x-6 rounded-lg bg-gray-50 p-2 shadow-lg group-hover:flex">
            <button className="text-neutral-700 hover:text-blue-400">
              <FaRegEdit className="h-7 w-7" />
            </button>
            <button className="text-red-500 hover:text-red-800">
              <AiFillDelete className="h-7 w-7" />
            </button>
          </div>
        </div>
      </TaskProvider>
    </div>
  );
};

export default Task;

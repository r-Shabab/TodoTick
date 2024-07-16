// Task.jsx
import { TaskProvider } from "../context/TaskContext";
import TaskCheckbox from "./TaskCheckbox";
import TaskName from "./TaskName";
import { AiOutlinePushpin } from "react-icons/ai";
// import { AiFillPushpin } from "react-icons/ai";
import { RiDeleteBinLine } from "react-icons/ri";

// eslint-disable-next-line react/prop-types
const TaskLayout = ({ taskId, children, isChecked }) => {
  return (
    <div className="flex w-full items-center space-x-4 px-2">
      <TaskProvider taskId={taskId}>
        <div className="relative flex w-[2%] items-center justify-end">
          <TaskCheckbox />
        </div>

        <div className="group relative flex w-[90%] items-center justify-between">
          <TaskName taskId={taskId}>{children}</TaskName>
        </div>
        <div className="flex w-[5%] justify-center space-x-5 px-2">
          <button>
            <AiOutlinePushpin className="h-4 w-4 fill-color-text lg:h-7 lg:w-7" />
          </button>
          <button>
            <RiDeleteBinLine className="h-4 w-4 fill-color-delete-btn lg:h-7 lg:w-7" />
          </button>
        </div>
      </TaskProvider>
    </div>
  );
};

export default TaskLayout;

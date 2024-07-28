// Task.jsx
import { useContext } from "react";
import TaskCheckbox from "./TaskCheckbox";
import TaskName from "./TaskName";
import { AiOutlinePushpin } from "react-icons/ai";
// import { AiFillPushpin } from "react-icons/ai";
import { RiDeleteBinLine } from "react-icons/ri";
import TaskContext from "../context/TaskContext";

// eslint-disable-next-line react/prop-types
const TaskLayout = ({ taskId, children, isChecked }) => {
  const { deleteTodo, togglePinTodo, todos } = useContext(TaskContext);
  const todo = todos.find(t => t.id === taskId);
  return (
    <div className="flex w-full items-center space-x-4 px-6">
      <div className="relative flex w-[2%] items-center justify-end">
        <TaskCheckbox taskId={taskId}/>
      </div>
      <div className="group relative flex w-[90%] items-center justify-between">
        <TaskName taskId={taskId}>{children}</TaskName>
      </div>
      <div className="flex w-[5%] justify-center space-x-5 px-2">
        <button onClick={() => togglePinTodo(taskId)}>
          {todo.pinned ? (
            <AiFillPushpin className="h-4 w-4 fill-yellow-400 lg:h-7 lg:w-7 transition-all duration-0" />
          ) : (
            <AiOutlinePushpin className="h-4 w-4 fill-color-text lg:h-7 lg:w-7 hover:fill-yellow-400 transition-all duration-0" />
          )}
        </button>
        <button onClick={() => deleteTodo(taskId)}>
          <RiDeleteBinLine className="h-4 w-4 fill-color-text hover:fill-color-delete-btn lg:h-7 lg:w-7 transition-all duration-0" />
        </button>
      </div>
    </div>
  );
};

export default TaskLayout;

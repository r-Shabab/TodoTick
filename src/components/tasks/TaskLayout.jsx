import { useContext } from "react";
import TaskCheckbox from "./TaskCheckbox";
import TaskName from "./TaskName";
import { AiOutlinePushpin } from "react-icons/ai";
import { AiFillPushpin } from "react-icons/ai";
import { RiDeleteBinLine, RiArrowGoBackLine } from "react-icons/ri";
import TaskContext from "../context/TaskContext";

const TaskLayout = ({ taskId, children }) => {
  const { deleteTodo, undoDelete, togglePinTodo, todos } =
    useContext(TaskContext);
  const todo = todos.find((t) => t.id === taskId);
  return (
    <div className="flex w-full items-center space-x-4 px-6">
      <div className="relative flex w-[2%] items-center justify-end">
        <TaskCheckbox taskId={taskId} />
      </div>
      <div className="group relative flex w-[90%] items-center pe-2">
        <TaskName taskId={taskId}>{children}</TaskName>
      </div>
      <div className="flex w-[7%] items-center justify-center space-x-4 px-2">
        <button onClick={() => togglePinTodo(taskId)}>
          {todo.pinned ? (
            <AiFillPushpin className="h-5 w-5 fill-yellow-400 transition-all duration-0 lg:h-7 lg:w-7" />
          ) : (
            <AiOutlinePushpin className="h-5 w-5 fill-color-text transition-all duration-0 hover:fill-yellow-400 lg:h-7 lg:w-7" />
          )}
        </button>
        {todo.deleted ? (
          <button onClick={() => undoDelete(taskId)}>
            <RiArrowGoBackLine className="h-5 w-5 fill-color-text transition-all duration-0 hover:fill-color-primary lg:h-7 lg:w-7" />
          </button>
        ) : (
          <button onClick={() => deleteTodo(taskId)}>
            <RiDeleteBinLine className="h-5 w-5 fill-color-text transition-all duration-0 hover:fill-color-delete-btn lg:h-7 lg:w-7" />
          </button>
        )}
      </div>
    </div>
  );
};

export default TaskLayout;

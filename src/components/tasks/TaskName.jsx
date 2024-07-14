// Label.jsx
import { motion } from "framer-motion";
import { useContext } from "react";
import TaskContext from "../context/TaskContext";
import { CiCalendar } from "react-icons/ci";
import { IoIosFlag } from "react-icons/io";

// eslint-disable-next-line react/prop-types
const TaskName = ({ children, taskId }) => {
  const { isTodoChecked, getTodoDueDate, getTodoPriority } =
    useContext(TaskContext);

  const isChecked = isTodoChecked(taskId);
  const dueDate = getTodoDueDate(taskId);
  const priority = getTodoPriority(taskId);

  const getPriorityText = (priority) => {
    if (!priority) return null;
    return priority.charAt(0).toUpperCase() + priority.slice(1);
  };

  const priorityText = getPriorityText(priority);

  return (
    <div className="flex flex-col">
      <motion.label
        className={`relative break-all font-todo lg:text-xl ${
          isChecked ? "line-through" : ""
        } text-color-text`}
        htmlFor={taskId}
        animate={{
          x: isChecked ? [0, -5, 0] : [0, 5, 0],
          color: isChecked ? "#a1a1aa" : "",
          textDecorationLine: isChecked ? "line-through" : "none",
        }}
        initial={false}
        transition={{
          duration: 0.5,
          ease: "backOut",
        }}
      >
        {children}
      </motion.label>
      {(dueDate || priorityText) && (
        <div className="bg-c flex items-center space-x-2">
          {dueDate && (
            <div className="flex items-center space-x-1">
              <CiCalendar className="h-4 w-4 fill-color-primary-btn" />
              <div
                id={`date-${taskId}`}
                className="font-todo text-xs text-color-text"
              >
                {dueDate}
              </div>
            </div>
          )}
          {dueDate && priorityText && (
            <span className="text-color-text"> | </span>
          )}
          {priorityText && (
            <div className="flex items-center space-x-1">
              <IoIosFlag className="h-4 w-4 fill-color-delete-btn" />
              <div
                id={`priority-${taskId}`}
                className="font-todo text-xs text-color-text"
              >
                {priorityText}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TaskName;

import { motion } from "framer-motion";
import { useContext } from "react";
import TaskContext from "../context/TaskContext";
import { CiCalendar } from "react-icons/ci";
import { IoIosFlag } from "react-icons/io";

const formatDate = (dateString) => {
  if (!dateString) return null;

  const date = new Date(dateString);
  const options = { weekday: "short", month: "long", day: "numeric" };
  return date.toLocaleDateString(undefined, options);
};

const TaskName = ({ children, taskId }) => {
  const { isTodoChecked, getTodoDueDate, getTodoPriority, isTodoDeleted } =
    useContext(TaskContext);

  const isChecked = isTodoChecked(taskId);
  const dueDate = getTodoDueDate(taskId);
  const priority = getTodoPriority(taskId);
  const isDeleted = isTodoDeleted(taskId);

  const getPriorityConfig = (priority) => {
    switch (priority) {
      case "low":
        return {
          text: "Low",
          color: "text-blue-500",
          fillColor: "fill-blue-500",
        };
      case "medium":
        return {
          text: "Medium",
          color: "text-yellow-500",
          fillColor: "fill-yellow-500",
        };
      case "high":
        return {
          text: "High",
          color: "text-red-500",
          fillColor: "fill-red-500",
        };
      default:
        return null;
    }
  };

  const priorityConfig = getPriorityConfig(priority);

  return (
    <div className="flex flex-col">
      <motion.label
        className={`relative break-all font-todo lg:text-xl ${
          isChecked ? "line-through" : ""
        } ${isDeleted ? "text-color-delete-btn" : ""} } text-color-text`}
        htmlFor={taskId}
        animate={{
          x: isChecked ? [0, 7, 0] : [0, -7, 0],
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
      <div className="mt-1 flex items-center space-x-2">
        {dueDate && (
          <div className="flex items-center space-x-1">
            <CiCalendar className="h-5 w-5 fill-color-text" />
            <div
              id={`date-${taskId}`}
              className="font-todo text-xs text-color-text lg:font-semibold"
            >
              {formatDate(dueDate)}
            </div>
          </div>
        )}
        {dueDate && priorityConfig && (
          <span className="text-color-text"> | </span>
        )}
        {priorityConfig && (
          <div className="flex items-center space-x-1">
            <IoIosFlag className={`h-4 w-4 ${priorityConfig.fillColor}`} />
            <div
              id={`priority-${taskId}`}
              className={`font-todo text-xs lg:font-semibold ${priorityConfig.color}`}
            >
              {priorityConfig.text}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskName;

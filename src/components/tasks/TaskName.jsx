// Label.jsx
import { motion } from "framer-motion";
import { useContext } from "react";
import TaskContext from "../contexts/TaskContext";

// eslint-disable-next-line react/prop-types
const TaskName = ({ children, taskId }) => {
  const { tasks } = useContext(TaskContext);
  const task = tasks.find((task) => task.id === taskId);

  return (
    <motion.label
      className={`relative break-all font-todo font-light lg:text-lg ${
        task?.isChecked ? "line-through" : ""
      } text-color-text`}
      htmlFor={taskId}
      animate={{
        x: task?.isChecked ? [0, -6, 0] : [0, 6, 0],
        color: task?.isChecked ? "#a1a1aa" : "",
        textDecorationLine: task?.isChecked ? "line-through" : "none",
      }}
      initial={false}
      transition={{
        duration: 0.3,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.label>
  );
};

export default TaskName;

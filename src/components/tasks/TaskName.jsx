// Label.jsx
import { motion } from "framer-motion";
import { useContext } from "react";
import TaskContext from "../contexts/TaskContext";

// eslint-disable-next-line react/prop-types
const TaskName = ({ children }) => {
  const { taskId, isChecked } = useContext(TaskContext);

  return (
    <motion.label
      className={`relative break-all font-todo font-light lg:text-lg ${
        isChecked ? "line-through" : ""
      } text-color-text`}
      htmlFor={taskId}
      animate={{
        x: isChecked ? [0, -6, 0] : [0, 6, 0],
        color: isChecked ? "#a1a1aa" : "",
        textDecorationLine: isChecked ? "line-through" : "none",
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

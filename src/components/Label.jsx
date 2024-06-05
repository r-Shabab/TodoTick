// Label.jsx
import { motion } from "framer-motion";
import { useContext } from "react";
import TaskContext from "./TaskContext";

// eslint-disable-next-line react/prop-types
const Label = ({ children }) => {
  const { taskId, isChecked } = useContext(TaskContext);

  return (
    <motion.label
      className="relative ml-3 break-all text-lg line-through"
      htmlFor={taskId}
      animate={{
        x: isChecked ? [0, -6, 0] : [0, 6, 0],
        color: isChecked ? "#a1a1aa" : "#27272a",
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

export default Label;

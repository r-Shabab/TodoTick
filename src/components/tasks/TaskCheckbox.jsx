/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useContext } from "react";
import TaskContext from "../context/TaskContext";

const tickVariants = {
  checked: {
    pathLength: 1,
    opacity: 1,
    transition: {
      duration: 0.2,
      delay: 0.1,
    },
  },
  unchecked: {
    pathLength: 0,
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};

const TaskCheckbox = (taskId) => {
  const { isTodoChecked, toggleCheck } = useContext(TaskContext);

  const isChecked = isTodoChecked(taskId);

  const handleCheckbox = () => {
    toggleCheck(taskId);
  };
  return (
    <div className="relative flex items-center">
      <input
        type="checkbox"
        className={`relative h-5 w-5 cursor-pointer appearance-none rounded-full border-2 border-color-primary-btn bg-color-background/30 transition-all duration-500 checked:border-[#276792] checked:bg-color-primary-btn lg:h-7 lg:w-7`}
        onChange={handleCheckbox}
        id={taskId}
        checked={isChecked}
      />
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 25 25"
          strokeWidth="3"
          stroke="currentColor"
          className="h-5 w-5"
          initial={false}
          animate={isChecked ? "checked" : "unchecked"}
        >
          <motion.path
            strokeLinecap="butt"
            strokeLinejoin="round"
            d="M4.5 12.75l6 6 9-13.5"
            variants={tickVariants}
          />
        </motion.svg>
      </div>
    </div>
  );
};
export default TaskCheckbox;

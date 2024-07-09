/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { HiOutlineChevronDown, HiFlag } from "react-icons/hi";
import { HiOutlineChevronUp } from "react-icons/hi2";
import TaskContext from "../../context/TaskContext";

export const PriorityDropdown = ({ priority, setPriority }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { priorities } = useContext(TaskContext);
  // <select value={todo.priority || ""} onChange={handlePriorityChange}>
  //   <option value="">No Priority</option>
  //   <option value="low">Low</option>
  //   <option value="medium">Medium</option>
  //   <option value="high">High</option>
  // </select>;

  return (
    <div className="relative w-1/5">
      <button
        type="button"
        className="flex w-full items-center justify-between rounded-lg border border-gray-300 bg-color-background px-4 py-3 text-left text-gray-800 focus:border-blue-500 focus:ring-blue-500"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="flex items-center text-color-text">
          <HiFlag className={`mr-2 h-5 w-5 ${priority.color}`} />
          {priority.label}
        </span>
        {isOpen ? (
          <HiOutlineChevronUp className="h-5 w-5 text-color-text" />
        ) : (
          <HiOutlineChevronDown className="h-5 w-5 text-color-text" />
        )}
      </button>
      {isOpen && (
        <div className="absolute z-10 mt-2 w-full rounded-lg border border-color-background bg-color-background shadow-lg">
          {priorities.map((item) => (
            <button
              key={item.value}
              type="button"
              className="flex w-full items-center px-4 py-3 text-color-text hover:bg-color-primary-btn hover:text-white"
              onClick={() => {
                setPriority(item);
                setIsOpen(false);
              }}
            >
              <HiFlag className={`mr-2 h-5 w-5 ${item.color}`} />
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

/* eslint-disable react/prop-types */
import { useState } from "react";
import { HiOutlineChevronDown, HiFlag } from "react-icons/hi";
import { HiOutlineChevronUp } from "react-icons/hi2";

const priorities = [
  { label: "Low", value: "Low", color: "text-green-500" },
  { label: "Medium", value: "Medium", color: "text-yellow-500" },
  { label: "High", value: "High", color: "text-red-500" },
];

export const PriorityDropdown = ({ priority, setPriority }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-1/5">
      <button
        type="button"
        className="flex w-full items-center justify-between rounded-lg border border-gray-300 bg-color-background px-4 py-3 text-left text-gray-800 focus:border-blue-500 focus:ring-blue-500"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="flex items-center text-color-text">
          <HiFlag className={`mr-2 h-5 w-5 ${priority.color}`} />
          {priority.label || "Select Priority"}
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

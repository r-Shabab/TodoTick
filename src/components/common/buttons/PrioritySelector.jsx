import { useState } from 'react';
import { motion } from "framer-motion";
import { PiFlagPennantFill } from "react-icons/pi";

const PrioritySelector = ({ onPriorityChange }) => {
  const [selectedPriority, setSelectedPriority] = useState(null);

  const priorities = [
    {
      label: "None",
      color: "transparent",
      value: null,
      iconColor: "text-gray-400",
      tooltip: "No Priority",
    },
    {
      label: "Low",
      color: "blue-500",
      value: "low",
      iconColor: "text-blue-500",
      tooltip: "Low Priority",
    },
    {
      label: "Medium",
      color: "yellow-500",
      value: "medium",
      iconColor: "text-yellow-500",
      tooltip: "Medium Priority",
    },
    {
      label: "High",
      color: "red-500",
      value: "high",
      iconColor: "text-red-500",
      tooltip: "High Priority",
    },
  ];

  const handlePriorityChange = (value) => {
    setSelectedPriority(value);
    onPriorityChange(value);
  };

  return (
    <div className="mb-4">
      <label className="sr-only mb-2 block font-title text-sm font-semibold text-color-text xl:text-lg">
        Priority
      </label>
      <div className="flex space-x-4">
        {priorities.map(({ label, color, value, iconColor, tooltip }) => (
          <motion.div
            whileTap={{
              scale: 0.9,
            }}
            key={value}
            onClick={() => handlePriorityChange(value)}
            className={`flex cursor-pointer items-center justify-center rounded-lg p-3 hover:bg-color-background/80 ${
              selectedPriority === value ? `bg-color-background shadow-lg` : ""
            }`}
            title={tooltip}
          >
            <PiFlagPennantFill className={`h-6 w-6 ${iconColor}`} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PrioritySelector;
import { createContext, useContext, useState } from "react";
import { motion } from "framer-motion";

const CheckboxContext = createContext({
  id: "",
  isChecked: false,
  setIsChecked: () => {},
});

const tickVariants = {
  checked: {
    pathLength: 1,
    opacity: 1,
    transition: {
      duration: 0.2,
      delay: 0.2,
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

// eslint-disable-next-line react/prop-types
const FramerCheckbox = ({ children, id }) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="flex items-center">
      <CheckboxContext.Provider value={{ id, isChecked, setIsChecked }}>
        {children}
      </CheckboxContext.Provider>
    </div>
  );
};

const CheckboxIndicator = () => {
  const { id, isChecked, setIsChecked } = useContext(CheckboxContext);

  return (
    <button className="relative flex items-center">
      <input
        type="checkbox"
        className="border-blue-gray-200 checked:border-emerald-500-500 relative h-6 w-6 cursor-pointer appearance-none rounded-full border-2 transition-all duration-500 checked:bg-emerald-500"
        onChange={() => setIsChecked(!isChecked)}
        id={id}
      />
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="3.5"
          stroke="currentColor"
          className="h-3.5 w-3.5"
          initial={false}
          animate={isChecked ? "checked" : "unchecked"}
        >
          <motion.path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 12.75l6 6 9-13.5"
            variants={tickVariants}
          />
        </motion.svg>
      </div>
    </button>
  );
};

// eslint-disable-next-line react/prop-types
const CheckboxLabel = ({ children }) => {
  const { id, isChecked } = useContext(CheckboxContext);

  return (
    <motion.label
      className="relative ml-2 overflow-hidden text-lg line-through"
      htmlFor={id}
      animate={{
        x: isChecked ? [0, -4, 0] : [0, 4, 0],
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

FramerCheckbox.Indicator = CheckboxIndicator;
FramerCheckbox.Label = CheckboxLabel;

export default FramerCheckbox;

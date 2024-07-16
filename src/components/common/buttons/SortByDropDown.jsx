import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { GoSortDesc } from "react-icons/go";
import { v4 as uuidv4 } from "uuid";
const SortByDropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sortOption, setSortOption] = useState("");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSortOption(option.label);
    setIsOpen(false);
  };

  const options = [
    { label: "Priority (High > Low)", value: "priorityHighLow" },
    { label: "Priority (Low > High)", value: "priorityLowHigh" },
    { label: "Due Date (Recent > Old)", value: "dueDateRecentOld" },
    { label: "Due Date (Old > Recent)", value: "dueDateOldRecent" },
  ];

  const menuVariants = {
    closed: {
      scale: 0,
      transition: {
        delay: 0.15,
      },
    },
    open: {
      scale: 1,
      transition: {
        type: "spring",
        duration: 0.4,
        delayChildren: 0.2,
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    closed: { x: -16, opacity: 0 },
    open: { x: 0, opacity: 1 },
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <motion.button
          whileTap={{ scale: 0.95 }}
          type="button"
          className="flex w-full items-center space-x-10 rounded-md bg-color-tasks-bg px-4 py-2 font-button text-color-text shadow-md hover:bg-color-sidebar/75 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-color-primary-btn xl:px-8 xl:py-3"
          id="options-menu"
          onClick={toggleDropdown}
        >
          <div className="flex items-center space-x-1 text-sm lg:text-lg">
            <span>{`Sort By ${sortOption ? `: ${sortOption}` : ""}`}</span>
            <span>{!sortOption && <GoSortDesc className="h-5 w-5" />}</span>
          </div>
          <span>
            {isOpen ? (
              <FaAngleUp className="h-5 w-5" />
            ) : (
              <FaAngleDown className="h-5 w-5" />
            )}
          </span>
        </motion.button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute left-0 z-40 mt-2 w-64 origin-top-left rounded-md bg-color-tasks-bg shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <div role="none">
              {options.map((option, index) => (
                <motion.button
                  key={uuidv4()}
                  className={`text-md block w-full px-4 py-2 text-left text-color-text hover:bg-color-menu/50 ${index % 2 === 1 ? "border-b border-color-background" : ""}`}
                  role="menuitem"
                  onClick={() => handleOptionClick(option)}
                  variants={itemVariants}
                  transition={{ opacity: { duration: 0.2 } }}
                >
                  <span>{option.label}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SortByDropDown;

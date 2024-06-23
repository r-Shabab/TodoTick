import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";
export const SortByButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Sort by");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option.label);
    setIsOpen(false);
  };

  const options = [
    { label: "Name (A > Z)", value: "nameAsc" },
    { label: "Name (Z > A)", value: "nameDesc" },
    { label: "Priority (High > Low)", value: "priorityHighLow" },
    { label: "Priority (Low > High)", value: "priorityLowHigh" },
    { label: "Due Date (Recent > Old)", value: "dueDateRecentOld" },
    { label: "Due Date (Old > Recent)", value: "dueDateOldRecent" },
    { label: "Date Created (Recent > Old)", value: "dateCreatedRecentOld" },
    { label: "Date Created (Old > Recent)", value: "dateCreatedOldRecent" },
  ];

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="focus:ring-add-btn text-color-text inline-flex w-full items-center justify-center space-x-4 rounded-md bg-color-tasks-bg px-4 py-2 font-body shadow-sm hover:bg-color-menu focus:outline-none focus:ring-2 lg:px-6 lg:py-2"
          id="options-menu"
          aria-expanded="true"
          aria-haspopup="true"
          onClick={toggleDropdown}
        >
          <span className="text-sm lg:text-base">{selectedOption}</span>
          <span>{isOpen ? <FaAngleUp /> : <FaAngleDown />}</span>
        </button>
      </div>
      {isOpen && (
        <div
          className="absolute left-0 z-40 mt-2 w-56 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div role="none">
            {options.map((option, index) => (
              <button
                key={option.value}
                className={`block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 ${index % 2 === 1 ? "border-b" : ""}`}
                role="menuitem"
                onClick={() => handleOptionClick(option)}
              >
                <span className="">{option.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

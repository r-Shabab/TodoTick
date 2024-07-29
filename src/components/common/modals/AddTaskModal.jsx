/* eslint-disable react/prop-types */
import { useState, useContext, useRef, useEffect } from "react";
import { FaPlus } from "react-icons/fa6";
// import DateButton from "../buttons/DateButton";
import TaskContext from "../../context/TaskContext";
import { AnimatePresence, motion } from "framer-motion";
import PrioritySelector from "../buttons/PrioritySelector";
import DateSelector from "../buttons/DateSelector";

export const AddTaskModal = ({ show, onClose }) => {
  //states
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const { addTodo } = useContext(TaskContext);
  const inputRef = useRef(null);

  useEffect(() => {
    if (show && inputRef.current) {
      inputRef.current.focus();
    }
  }, [show]);

  if (!show) return null;
  //handleDateChange
  // const handleDateChange = (date) => {
  //   setDueDate(date);
  // };

  const resetFields = () => {
    setTask("");
    setPriority(null);
    setSelectedDate(null);
  };

 const handlePriorityChange = (newPriority) => {
    setPriority(newPriority);
  };

  //handleSave
  const handleSave = (e) => {
    e.preventDefault();
    const newTodo = {
      task,
      priority,
      selectedDate,
    };
    addTodo(newTodo);
    onClose();
    resetFields();
  };

  //handleCancel
  const handleCancel = () => {
    onClose();
    resetFields();
  };

  return (
    <AnimatePresence>
      <div className="absolute inset-0 z-50 bg-black bg-opacity-50"></div>
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.75,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          transition: {
            ease: "easeInOut",
            duration: 0.15,
          },
        }}
        exit={{
          opacity: 0,
          scale: 0.75,
          transition: {
            ease: "easeIn",
            duration: 0.15,
          },
        }}
        className="fixed inset-0 z-50 flex items-center justify-center"
      >
        <form
          onSubmit={handleSave}
          className="flex w-11/12 flex-col space-y-6 rounded-lg bg-color-sidebar p-5 shadow-lg xl:w-1/3 xl:p-7"
        >
          <div>
            <div className="mx-auto w-full">
              <div className="relative flex items-center">
                <div className="absolute left-3">
                  <FaPlus className="h-4 w-4 text-color-text lg:h-6 lg:w-6" />
                </div>
                <input
                  ref={inputRef}
                  type="text"
                  className="block h-16 w-full rounded-lg border border-color-background bg-color-background py-4 pl-10 pr-4 font-todo text-base text-color-text shadow-md focus:border-transparent focus:outline-none focus:ring-2 focus:ring-color-primary lg:text-xl xl:pl-14"
                  placeholder="Add New Task..."
                  value={task}
                  onChange={(e) => setTask(e.target.value)}
                  required
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between xl:flex-row xl:items-center xl:space-x-8">
            <div className="flex flex-col space-y-2">
            <label className="font-title text-color-text ">Priority</label>
            <PrioritySelector onPriorityChange={handlePriorityChange} />
            </div>
            <div className="flex flex-col space-y-2">
            <label className="font-title text-color-text ">Due Date</label>
            <DateSelector
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
              />
              </div>
          </div>
          <div className="flex justify-end space-x-5">
            <button
              type="button"
              className="rounded bg-color-background/50 px-8 py-1 font-button text-sm text-color-text hover:bg-white/20 xl:px-10 xl:py-4 xl:text-lg"
              onClick={handleCancel}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded bg-color-primary px-8 py-2 font-button text-sm text-white hover:bg-blue-600 xl:px-10 xl:py-4 xl:text-lg"
            >
              Add
            </button>
          </div>
        </form>
      </motion.div>
    </AnimatePresence>
  );
};

export default AddTaskModal;

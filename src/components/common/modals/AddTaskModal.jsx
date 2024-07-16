/* eslint-disable react/prop-types */
import { useState, useContext, useRef, useEffect } from "react";
import { FaPlus } from "react-icons/fa6";
import DateButton from "../buttons/DateButton";
import TaskContext from "../../context/TaskContext";
import { AnimatePresence, motion } from "framer-motion";
import PrioritySelector from "../buttons/PrioritySelector";
export const AddTaskModal = ({ show, onClose }) => {
  //states
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState(null);
  const [dueDate, setDueDate] = useState(null);
  const { addTodo } = useContext(TaskContext);
  const inputRef = useRef(null);

  useEffect(() => {
    if (show && inputRef.current) {
      inputRef.current.focus();
    }
  }, [show]);

  if (!show) return null;
  //handleDateChange
  const handleDateChange = (date) => {
    setDueDate(date);
  };

  const resetFields = () => {
    setTask("");
    setPriority(null);
    setDueDate(null);
  };

  //handleSave
  const handleSave = (e) => {
    e.preventDefault();
    const newTodo = {
      task,
      priority,
      dueDate,
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
                  className="block h-16 w-full rounded-lg border border-color-background bg-color-background py-4 pl-10 pr-4 font-todo text-base text-color-text shadow-md focus:border-transparent focus:outline-none focus:ring-2 focus:ring-color-primary-btn lg:text-xl xl:pl-14"
                  placeholder="Add New Task..."
                  value={task}
                  onChange={(e) => setTask(e.target.value)}
                  required
                />
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <PrioritySelector />
            <DateButton onDateChange={handleDateChange}>
              {dueDate && <p>Due Date: {new Date(dueDate).toDateString()}</p>}
            </DateButton>
          </div>
          <div className="flex justify-end space-x-5">
            <button
              type="button"
              className="rounded bg-white/30 px-6 py-2 font-button text-lg text-color-text hover:bg-white/20"
              onClick={handleCancel}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded bg-color-primary-btn px-10 py-3 font-button text-lg text-white hover:bg-blue-600"
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

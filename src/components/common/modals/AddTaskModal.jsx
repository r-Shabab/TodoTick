/* eslint-disable react/prop-types */
import { useState, useContext, useRef, useEffect } from "react";
import { IoAdd } from "react-icons/io5";
//import { PriorityDropdown } from "../buttons/PriorityButton";
import DateButton from "../buttons/DateButton";
import TaskContext from "../../context/TaskContext";

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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-600 bg-opacity-50">
      <form
        onSubmit={handleSave}
        className="flex w-1/3 flex-col space-y-6 rounded-lg bg-color-sidebar p-7 shadow-lg"
      >
        <div>
          <div className="mx-auto w-full">
            <div className="relative flex items-center">
              <div className="absolute left-4">
                <IoAdd className="h-8 w-8 text-gray-600 lg:h-12 lg:w-8" />
              </div>
              <input
                ref={inputRef}
                type="text"
                className="block h-16 w-full rounded-lg border border-color-background bg-color-background py-8 pl-16 pr-4 text-base text-gray-800 shadow-md lg:text-xl"
                placeholder="Add New Task..."
                value={task}
                onChange={(e) => setTask(e.target.value)}
                required
              />
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <label
            htmlFor="priority"
            className="sr-only block text-sm font-medium text-gray-700"
          >
            Priority
          </label>
          <select
            id="priority"
            value={priority || ""}
            onChange={(e) => setPriority(e.target.value || null)}
            className="mt-1 block w-[25%] rounded-md border-gray-300 p-2 py-4 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          >
            <option value="">No Priority</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
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
    </div>
  );
};

export default AddTaskModal;

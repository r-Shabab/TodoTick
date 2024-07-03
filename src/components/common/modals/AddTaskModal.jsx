/* eslint-disable react/prop-types */
// AddTaskModal.jsx
import { useContext, useState } from "react";
import { IoAdd } from "react-icons/io5";
import { PriorityDropdown } from "../buttons/PriorityButton";
import DateButton from "../buttons/DateButton";
import TaskContext from "../../contexts/TaskContext";

export const AddTaskModal = ({ show, onClose }) => {
  const { addTask } = useContext(TaskContext);
  const [dueDate, setDueDate] = useState("");
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState({
    label: "Priority",
    value: "",
    color: "",
  });

  if (!show) return null;

  const handleSave = () => {
    addTask({ id: Date.now(), task, priority: priority.value, dueDate });
    setTask("");
    setPriority({ label: "Priority", value: "", color: "" });
    setDueDate("");
    onClose();
  };

  const handleCancel = () => {
    setTask("");
    setPriority({ label: "Priority", value: "", color: "" });
    setDueDate("");
    onClose();
  };

  const handleDateChange = (date) => {
    setDueDate(date);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-600 bg-opacity-50">
      <div className="flex w-1/3 flex-col space-y-6 rounded-lg bg-color-sidebar p-7 shadow-lg">
        <div>
          <form className="mx-auto w-full">
            <div className="relative flex items-center">
              <div className="absolute left-4">
                <IoAdd className="h-8 w-8 text-gray-600 lg:h-12 lg:w-8" />
              </div>
              <input
                type="text"
                className="block h-16 w-full rounded-lg border border-color-background bg-color-background py-8 pl-16 pr-4 text-base text-gray-800 shadow-md lg:text-xl"
                placeholder="Add New Task..."
                value={task}
                onChange={(e) => setTask(e.target.value)}
                required
              />
            </div>
          </form>
        </div>
        <div className="flex items-center space-x-4">
          <PriorityDropdown priority={priority} setPriority={setPriority} />
          <DateButton onDateChange={handleDateChange}>
            {dueDate && <p>Due Date: {new Date(dueDate).toDateString()}</p>}
          </DateButton>
        </div>
        <div className="flex justify-end space-x-5">
          <button
            className="rounded bg-white/30 px-6 py-2 font-button text-lg text-color-text hover:bg-white/20"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button
            className="rounded bg-color-primary-btn px-10 py-3 font-button text-lg text-white hover:bg-blue-600"
            onClick={handleSave}
          >
            Add Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTaskModal;

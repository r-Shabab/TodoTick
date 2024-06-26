/* eslint-disable react/prop-types */
import { useState } from "react";
import { IoAdd } from "react-icons/io5";
import { HiFlag } from "react-icons/hi2";

export const AddTaskModal = ({ show, onClose, onSave }) => {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("");

  if (!show) return null;

  const handleSave = () => {
    onSave(task);
    setTask("");
    setPriority("");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-600 bg-opacity-50">
      <div className="flex w-1/3 flex-col space-y-10 rounded-lg bg-white p-7 shadow-lg">
        <div>
          <form className="mx-auto w-full">
            <div className="relative flex items-center">
              <div className="absolute px-6 lg:px-4">
                <IoAdd className="h-8 w-5 text-gray-600 lg:h-16 lg:w-7" />
              </div>
              <input
                type="search"
                id="default-search"
                className="block h-16 w-full rounded-lg border border-gray-300 bg-gray-100 px-16 py-8 text-base text-gray-800 shadow-md focus:border-blue-500 focus:ring-blue-500 lg:text-xl"
                placeholder="Add New Task..."
                value={task}
                onChange={(e) => setTask(e.target.value)}
                required
              />
            </div>
          </form>
        </div>
        <div className="relative">
          <HiFlag className="absolute left-3 top-3 h-6 w-6 text-gray-600" />
          <select
            className="w-1/5 rounded-lg border border-gray-300 bg-gray-100 py-3 pl-10 pr-4 text-gray-800 focus:border-blue-500 focus:ring-blue-500"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="" disabled className="text-gray-400">
              Priority
            </option>
            <option value="Low" className="bg-white text-gray-600">
              Low
            </option>
            <option value="Medium" className="bg-white text-yellow-500">
              Medium
            </option>
            <option value="High" className="bg-white text-red-600">
              High
            </option>
          </select>
        </div>
        <div className="flex justify-end">
          <button
            className="mr-2 rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="rounded bg-blue-500 px-5 py-3 text-white hover:bg-blue-600"
            onClick={handleSave}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

import { useState } from "react";
import { IoAdd } from "react-icons/io5";
// eslint-disable-next-line react/prop-types
export const AddTaskModal = ({ show, onClose, onSave }) => {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("Low");
  if (!show) return null;

  const handleSave = () => {
    onSave(task);
    setTask("");
    setPriority("Low");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-600 bg-opacity-50">
      <div className="flex w-1/3 flex-col space-y-10 rounded-lg bg-white p-7 shadow-lg">
        {/* <textarea
          className="mb-4 w-full rounded border border-gray-300 p-2"
          placeholder=" + Add New Task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        ></textarea> */}
        <div>
          <form className="mx-auto w-full">
            <div className="relative flex items-center">
              <div className="absolute px-6 lg:px-4">
                <IoAdd className="h-8 w-5 text-color-text lg:h-16 lg:w-7" />
              </div>
              <input
                type="search"
                id="default-search"
                className="block h-16 w-full rounded-lg border border-gray-200 bg-color-background px-16 py-8 font-mono text-base text-color-text shadow-md focus:border-color-primary-btn focus:ring-color-primary-btn lg:text-xl"
                placeholder="Add New Task..."
                required
              />
            </div>
          </form>
        </div>
        <div>
          <select
            className="mb-4 w-1/5 rounded border border-gray-300 p-3"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="Low" className="text-gray-400">
              Low
            </option>
            <option value="Medium" className="text-yellow-400">
              Medium
            </option>
            <option value="High" className="text-red-600">
              High
            </option>
          </select>
        </div>
        <div>
          <div className="flex justify-end">
            <button
              className="mr-2 rounded bg-red-500 px-4 py-2 text-white"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              className="rounded bg-color-primary-btn px-5 py-3 text-white"
              onClick={handleSave}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

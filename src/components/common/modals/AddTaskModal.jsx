import { useState } from "react";

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
      <div className="w-1/3 rounded-lg bg-white p-5 shadow-lg">
        <h2 className="mb-4 text-lg font-semibold">Add Task</h2>
        <textarea
          className="mb-4 w-full rounded border border-gray-300 p-2"
          placeholder="Enter your task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        ></textarea>
        <select
          className="mb-4 w-1/5 rounded border border-gray-300 bg-priority-btn p-2 text-white"
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
        <div className="flex justify-end">
          <button
            className="mr-2 rounded bg-red-500 px-4 py-2 text-white"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="rounded bg-blue-500 px-4 py-2 text-white"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

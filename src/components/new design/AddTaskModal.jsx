import React from 'react'

export const AddTaskModal = ({ show, onClose, onSave }) => {
  if (!show) return null;

  const [task, setTask] = React.useState('');
  const [priority, setPriority] = React.useState('Low');

  const handleSave = () => {
    onSave(task);
    setTask('');
    setPriority('Low');
  };

  return (<div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-5 rounded-lg shadow-lg w-1/3">
        <h2 className="text-lg font-semibold mb-4">Add Task</h2>
        <textarea
          className="w-full p-2 border border-gray-300 rounded mb-4"
          placeholder="Enter your task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        ></textarea>
        <select
          className="w-1/5 p-2 border bg-priority-btn text-white border-gray-300 rounded mb-4"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          
        >
          
          <option value="Low" className='text-gray-400'>Low</option>
          <option value="Medium" className='text-yellow-400'>Medium</option>
          <option value="High" className='text-red-600'>High</option>
        </select>
        <div className="flex justify-end">
          <button
            className="bg-red-500 text-white px-4 py-2 rounded mr-2"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

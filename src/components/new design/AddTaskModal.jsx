import { useState } from "react";
import Modal from "react-modal";

// eslint-disable-next-line react/prop-types
const AddTaskModal = ({ closeModal }) => {
  const [task, setTask] = useState("");

  const handleAddTask = () => {
    console.log("Task:", task); // Replace this with your task handling logic
    setTask("");
    closeModal();
  };

  return (
    <Modal
      isOpen={true}
      onRequestClose={closeModal}
      contentLabel="Add Task Modal"
      className="fixed inset-0 flex items-center justify-center"
      overlayClassName="fixed inset-0 bg-black bg-opacity-25"
    >
      <div className="mx-4 w-full max-w-md rounded bg-white p-6 shadow-md">
        <h2 className="mb-4 text-xl">Add New Task</h2>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter your task"
          className="mb-4 w-full rounded border border-gray-300 p-2"
        />
        <div className="flex justify-end">
          <button
            onClick={handleAddTask}
            className="mr-2 rounded bg-green-500 px-4 py-2 text-white hover:bg-green-700"
          >
            Add
          </button>
          <button
            onClick={closeModal}
            className="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-700"
          >
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default AddTaskModal;

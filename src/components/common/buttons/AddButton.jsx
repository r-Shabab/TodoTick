import { useState } from "react";
import { IoAdd } from "react-icons/io5";
import { AddTaskModal } from "../modals/AddTaskModal";
export const AddButton = () => {
  const [showModal, setShowModal] = useState(false);

  const handleSave = (task) => {
    console.log("Task saved:", task);
    setShowModal(false);
  };
  return (
    <div>
      <button
        onClick={() => setShowModal(true)}
        className={`flex items-center justify-center space-x-2 rounded-lg bg-color-primary-btn px-5 py-3 font-title font-semibold text-white shadow-lg hover:bg-[#276792] lg:px-8 lg:py-4`}
      >
        <IoAdd className="h-5 w-5 lg:h-7 lg:w-7" />
        <span className={`font-body text-sm lg:text-xl`}>Add Task</span>
      </button>
      <AddTaskModal
        show={showModal}
        onClose={() => setShowModal(false)}
        onSave={handleSave}
      />
    </div>
  );
};
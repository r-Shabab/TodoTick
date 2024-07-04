import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { AddTaskModal } from "../modals/AddTaskModal";
const AddButton = () => {
  const [showModal, setShowModal] = useState(false);

  const handleSave = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button
        onClick={() => setShowModal(true)}
        className={`flex items-center justify-center space-x-2 rounded-lg bg-color-primary-btn px-4 py-3 font-button font-semibold text-white shadow-lg hover:bg-[#276792] lg:px-10 lg:py-5`}
      >
        <FaPlus className="h-4 w-4 lg:h-7 lg:w-7" />
        <span className={`text-sm lg:text-xl`}>Add Task</span>
      </button>
      <AddTaskModal
        show={showModal}
        onClose={() => setShowModal(false)}
        onSave={handleSave}
      />
    </div>
  );
};
export default AddButton;

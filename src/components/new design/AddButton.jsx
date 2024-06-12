import { useState } from "react";
import { IoAdd } from "react-icons/io5";
import AddTaskModal from "./AddTaskModal";
export const AddButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <button
        onClick={openModal}
        className={`flex items-center justify-center space-x-2 rounded-lg bg-add-btn px-8 py-4 font-title font-semibold text-white shadow-lg hover:bg-[#276792]`}
      >
        <IoAdd className="h-7 w-7" />
        <span className={`font-body text-lg`}>Add Task</span>
      </button>
      {isModalOpen && <AddTaskModal closeModal={closeModal} />}
    </div>
  );
};

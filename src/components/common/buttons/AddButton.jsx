import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { AddTaskModal } from "../modals/AddTaskModal";
import { motion } from "framer-motion";
const AddButton = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      <motion.button
        onClick={() => setShowModal(true)}
        className="flex items-center justify-center space-x-2 rounded-md bg-color-primary-btn px-4 py-3 font-button font-semibold text-white shadow-xl hover:bg-[#276792] lg:px-10 lg:py-5"
        whileHover={{
          scale: 1.1,
          ease: "backInOut",
          transition: { duration: 0.2 },
        }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "backInOut", duration: 0.5 }}
      >
        <FaPlus className="h-4 w-4 lg:h-7 lg:w-7" />
        <span className="text-sm lg:text-xl">Add Task</span>
      </motion.button>
      <AddTaskModal show={showModal} onClose={toggleModal} />
    </div>
  );
};
export default AddButton;

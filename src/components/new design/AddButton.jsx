import { IoAdd } from "react-icons/io5";
export const AddButton = () => {
  return (
    <div>
      <button
        className={`flex items-center justify-center space-x-2 rounded-lg bg-add-btn px-8 py-4 font-title font-semibold text-white shadow-lg hover:bg-[#276792]`}
      >
        <span className={`font-title text-xl`}>Add Task</span>
        <IoAdd className="h-7 w-7" />
      </button>
    </div>
  );
};

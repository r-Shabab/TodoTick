import { IoIosAdd } from "react-icons/io";

export default function Add() {
  return (
    <button
      className={
        "fixed left-[78%] top-[85%] rounded-full bg-emerald-500 p-3.5 text-white shadow-xl hover:bg-emerald-800 hover:text-gray-200 hover:shadow-lg focus:ring focus:ring-emerald-500"
      }
    >
      <IoIosAdd className="h-10 w-10" />
    </button>
  );
}

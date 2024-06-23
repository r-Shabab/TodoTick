import { IoIosAdd } from "react-icons/io";

export default function Add() {
  return (
    <button
      className={
        "bg-primary1 text-primary2 fixed left-[78%] top-[85%] rounded-full p-3.5 shadow-xl hover:bg-red-800 hover:text-gray-200 hover:shadow-lg focus:ring focus:ring-red-500"
      }
    >
      <IoIosAdd className="h-10 w-10" />
    </button>
  );
}

import { FaRegEdit } from "react-icons/fa";
export default function Edit() {
  return (
    <>
      <button className="rounded-md bg-blue-600 p-3 text-white shadow-xl hover:bg-blue-800 hover:text-gray-200 hover:shadow-lg">
        <FaRegEdit className="h-7 w-7" />
      </button>
    </>
  );
}

import { FaRegEdit } from "react-icons/fa";
export default function EditButton() {
  return (
    <>
      <button className="rounded-md bg-blue-600 p-3 text-white shadow-xl hover:bg-blue-800 hover:text-gray-200 hover:shadow-lg focus:outline-none focus:ring focus:ring-blue-600">
        <FaRegEdit className="h-5 w-5" />
      </button>
    </>
  );
}

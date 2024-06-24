import { AiFillDelete } from "react-icons/ai";
export default function DeleteButton() {
  return (
    <>
      <button className="rounded-md bg-red-500 p-3 text-white hover:bg-red-800 hover:text-gray-200 hover:shadow-lg focus:outline-none focus:ring focus:ring-red-500">
        <AiFillDelete className="h-5 w-5" />
      </button>
    </>
  );
}

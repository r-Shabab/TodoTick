import { AiFillDelete } from "react-icons/ai";
export default function Delete() {
  return (
    <>
      <button className="rounded-md bg-red-500 p-3 text-white hover:bg-red-800 hover:text-gray-200 hover:shadow-lg">
        <AiFillDelete className="h-7 w-7" />
      </button>
    </>
  );
}

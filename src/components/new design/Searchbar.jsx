import { FiSearch } from "react-icons/fi";
export const Searchbar = () => {
  return (
    <div>
      <form className="mx-auto w-full">
        <div className="relative flex">
          <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center px-6 lg:px-3">
            <FiSearch className="h-8 w-5 lg:h-16 lg:w-7" />
          </div>
          <input
            type="search"
            id="default-search"
            className="text-md block h-16 w-full rounded-lg border border-gray-300 bg-light-sidebar px-16 py-8 font-body text-gray-900 shadow-md focus:border-add-btn focus:ring-add-btn lg:text-lg"
            placeholder="Search"
            required
          />
        </div>
      </form>
    </div>
  );
};

import { FiSearch } from "react-icons/fi";
const Searchbar = () => {
  return (
    <div className="mx-auto w-full">
      <form className="relative">
        <div className="flex items-center">
          <div className="absolute left-3 flex items-center">
            <FiSearch className="h-6 w-6 text-gray-500" />
          </div>
          <input
            type="search"
            id="default-search"
            className="block h-12 w-full rounded-lg border border-gray-300 bg-white pl-12 pr-4 font-todo text-lg shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-color-primary-btn lg:h-14"
            placeholder="Search"
            required
          />
        </div>
      </form>
    </div>
  );
};

export default Searchbar;

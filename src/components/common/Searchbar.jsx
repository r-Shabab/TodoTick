import { FiSearch } from "react-icons/fi";
const Searchbar = () => {
  return (
    <div>
      <form className="mx-auto w-full">
        <div className="relative flex">
          <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center px-6 lg:px-3">
            <FiSearch className="h-8 w-5 text-color-text lg:h-16 lg:w-7" />
          </div>
          <input
            type="search"
            id="default-search"
            className="text-md block h-16 w-full rounded-lg border-color-text/30 bg-color-tasks-bg px-16 py-8 font-todo text-color-text shadow-md focus:border-color-primary-btn focus:ring-color-primary-btn lg:text-lg"
            placeholder="Search"
            required
          />
        </div>
      </form>
    </div>
  );
};

export default Searchbar;

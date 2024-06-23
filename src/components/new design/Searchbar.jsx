import { FiSearch } from "react-icons/fi";
export const Searchbar = () => {
  return (
    <div>
      <form className="mx-auto w-full">
        <div className="relative flex">
          <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center px-6 lg:px-3">
            <FiSearch className="text-color-text h-8 w-5 lg:h-16 lg:w-7" />
          </div>
          <input
            type="search"
            id="default-search"
            className="text-md border-color-text/30 text-color-text block h-16 w-full rounded-lg bg-color-tasks-bg px-16 py-8 font-body shadow-md focus:border-color-primary-btn focus:ring-color-primary-btn lg:text-lg"
            placeholder="Search"
            required
          />
        </div>
      </form>
    </div>
  );
};

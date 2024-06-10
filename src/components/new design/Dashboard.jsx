// import PinnedTasks from "../PinnedTasks";
import { FiSearch } from "react-icons/fi";
const Dashboard = () => {
  return (
    <div className="h-screen bg-light-body px-10 py-6">
      {/* Dashboard content */}
      <div>
        <form className="mx-auto w-4/6">
          {/* <label
            htmlFor="default-search"
            className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Search
          </label> */}
          <div className="relative flex">
            <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center px-3">
              <FiSearch className="h-16 w-7" />
            </div>
            <input
              type="search"
              id="default-search"
              className="block h-16 w-full rounded-lg border border-gray-300 bg-gray-50 p-4 px-16 text-sm text-gray-900 shadow-md focus:border-blue-500 focus:ring-blue-500"
              placeholder="Search"
              required
            />
            {/* <button
              type="submit"
              className="absolute bottom-2.5 end-2.5 rounded-lg bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button> */}
          </div>
        </form>
      </div>
      {/* <PinnedTasks /> */}
    </div>
  );
};

export default Dashboard;

// import PinnedTasks from "../PinnedTasks";
import { FiSearch } from "react-icons/fi";
import { Title } from "./Title";
const Dashboard = () => {
  return (
    <div className="h-screen bg-light-body px-10 py-6">
      <div className="mx-auto w-5/6">
        {/* Dashboard content */}
        <div>
          <form className="mx-auto w-9/12">
            <div className="relative flex">
              <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center px-3">
                <FiSearch className="h-16 w-7" />
              </div>
              <input
                type="search"
                id="default-search"
                className="block h-16 w-full rounded-lg border border-gray-300 bg-light-sidebar px-16 py-8 font-body text-lg text-gray-900 shadow-md focus:border-add-btn focus:ring-add-btn"
                placeholder="Search"
                required
              />
            </div>
          </form>
        </div>
        <Title />
        {/* <PinnedTasks /> */}
      </div>
    </div>
  );
};

export default Dashboard;

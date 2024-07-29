// import IncompleteTasks from "../tasks/IncompleteTasks";
import Searchbar from "../common/Searchbar";
import AddButton from "../common/buttons/AddButton";
import PageTitle from "../common/PageTitle";
import { Outlet } from "react-router-dom";
import SortByDropDown from "../common/buttons/SortByDropDown";
const Dashboard = () => {
  return (
    <div className="h-full overflow-y-auto bg-color-background pt-16">
      <div className="px-6 py-6 xl:px-20 xl:py-10">
        <div className="mx-auto w-full space-y-6 xl:w-5/6">
          <Searchbar />
          <div className="flex items-center justify-between px-2 xl:px-0">
            <PageTitle />
            <AddButton />
          </div>
          <SortByDropDown />

          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

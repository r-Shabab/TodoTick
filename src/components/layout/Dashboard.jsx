// import IncompleteTasks from "../tasks/IncompleteTasks";
import Searchbar from "../common/Searchbar";
import AddButton from "../common/buttons/AddButton";
import SortByButton from "../common/buttons/SortByButton";
import PageTitle from "../common/PageTitle";
// import PinnedTasks from "../tasks/PinnedTasks";
import AllTasksPage from "../pages/AllTasksPage";
import { TaskProvider } from "../contexts/TaskContext";

const Dashboard = () => {
  return (
    <TaskProvider>
      <div className="h-full overflow-y-auto bg-color-background pt-20 xl:pt-0">
        <div className="px-6 py-6 lg:px-20 lg:py-10">
          <div className="mx-auto w-full space-y-6 lg:w-5/6">
            <Searchbar />
            <div className="flex items-center justify-between px-2 lg:px-0">
              <PageTitle />
              <AddButton />
            </div>
            <SortByButton />

            <AllTasksPage />
          </div>
        </div>
      </div>
    </TaskProvider>
  );
};

export default Dashboard;

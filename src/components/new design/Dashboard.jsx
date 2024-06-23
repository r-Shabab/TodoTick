import PinnedTasks from "../PinnedTasks";
import Tasklist from "../Tasklist";
import { Searchbar } from "./Searchbar";
import { AddButton } from "./AddButton";
import { SortByButton } from "./SortByButton";
import { Title } from "./Title";

const Dashboard = () => {
  return (
    <div className="h-full overflow-y-auto bg-light-body pt-20 xl:pt-0">
      <div className="px-6 py-6 lg:px-20 lg:py-6">
        <div className="mx-auto w-full space-y-6 lg:w-5/6">
          <Searchbar />
          <div className="flex items-center justify-between px-2 lg:px-0">
            <Title />
            <AddButton />
          </div>
          <SortByButton />
          <PinnedTasks />
          <Tasklist />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

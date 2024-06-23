import PinnedTasks from "../PinnedTasks";
import Tasklist from "../Tasklist";
import { Searchbar } from "./Searchbar";
import { AddButton } from "./AddButton";
import { SortByButton } from "./SortByButton";
import { Title } from "./Title";

const Dashboard = () => {
  return (
    <div className="h-full overflow-y-auto bg-light-body">
      <div className="px-20 py-6 pb-10">
        <div className="mx-auto w-5/6 space-y-6">
          <Searchbar />
          <div className="flex items-center justify-between">
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

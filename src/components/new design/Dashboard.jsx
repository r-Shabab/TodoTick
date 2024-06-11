// import PinnedTasks from "../PinnedTasks";
import { AddButton } from "./AddButton";
import { Searchbar } from "./Searchbar";
import { SortByButton } from "./SortByButton";
import { Title } from "./Title";
const Dashboard = () => {
  return (
    <div className="h-screen bg-light-body px-20 py-6">
      <div className="mx-auto w-5/6 space-y-6">
        <Searchbar />
        <div className="flex items-center justify-between">
          <Title />
          <AddButton />
        </div>
        <SortByButton />
      </div>
    </div>
  );
};

export default Dashboard;
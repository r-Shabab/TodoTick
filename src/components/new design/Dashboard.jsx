// import PinnedTasks from "../PinnedTasks";

import { AddButton } from "./AddButton";
import { Searchbar } from "./Searchbar";
import { Title } from "./Title";
const Dashboard = () => {
  return (
    <div className="h-screen bg-light-body px-20 py-6">
      <div className="mx-auto w-5/6 space-y-8">
        {/* Dashboard content */}
        <Searchbar />
        <div className="flex items-center justify-between">
          <Title />
          <AddButton />
        </div>
        {/* <PinnedTasks /> */}
      </div>
    </div>
  );
};

export default Dashboard;

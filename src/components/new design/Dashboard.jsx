// import PinnedTasks from "../PinnedTasks";

import { Searchbar } from "./Searchbar";
import { Title } from "./Title";
const Dashboard = () => {
  return (
    <div className="h-screen bg-light-body px-10 py-6">
      <div className="mx-auto w-5/6 space-y-8">
        {/* Dashboard content */}
        <Searchbar />
        <Title />
        {/* <PinnedTasks /> */}
      </div>
    </div>
  );
};

export default Dashboard;

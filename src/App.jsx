import Dashboard from "./components/new design/Dashboard";
// import Navbar from "./components/Navbar";
import { Navbar } from "./components/new design/Navbar";
// import Add from "./components/Add";
// import PinnedTasks from "./components/PinnedTasks";
// import Tasklist from "./components/Tasklist";
// import { Title } from "./components/Title";

function App() {
  return (
    <>
      <div className="flex h-full">
        {/* Side Navbar */}
        <div className="w-1/6 bg-light-body">
          <Navbar />
        </div>
        <main className="flex-1">
          {/* <div className="relative">
            <PinnedTasks />
            <Tasklist />
            <div className="absolute left-3/4 top-[80%] lg:hidden">
              <Add />
            </div>
          </div> */}

          <Dashboard />
        </main>
      </div>
    </>
  );
}

export default App;

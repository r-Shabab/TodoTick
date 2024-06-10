import "./App.css";
// import Navbar from "./components/Navbar";
import { Navbar } from "./components/new design/Navbar";
import Add from "./components/Add";
import PinnedTasks from "./components/PinnedTasks";
import Tasklist from "./components/Tasklist";
// import { Title } from "./components/Title";

function App() {
  return (
    <div className="h-screen bg-slate-50">
      {/* <Navbar /> */}
      <Navbar />
      <div className="relative">
        {/* <Title /> */}
        <PinnedTasks />
        <Tasklist />
        <div className="absolute left-3/4 top-[80%] lg:hidden">
          <Add />
        </div>
      </div>
    </div>
  );
}

export default App;

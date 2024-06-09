import "./App.css";
import Add from "./components/Add";
import Navbar from "./components/Navbar";
import PinnedTasks from "./components/PinnedTasks";
import Tasklist from "./components/Tasklist";
// import { Title } from "./components/Title";

function App() {
  return (
    <div className="h-screen">
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

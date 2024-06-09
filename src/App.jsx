import "./App.css";
import Add from "./components/Add";
import Navbar from "./components/Navbar";
import PinnedTasks from "./components/PinnedTasks";
import Tasklist from "./components/Tasklist";
import { Title } from "./components/Title";

function App() {
  return (
    <>
      <Navbar />
      <div className="relative h-full">
        <Title />
        <PinnedTasks />
        <Tasklist />
        <div className="absolute left-3/4 top-[80%]">
          <Add />
        </div>
      </div>
    </>
  );
}

export default App;

import "./App.css";
import Add from "./components/Add";
import Navbar from "./components/Navbar";
import Tasklist from "./components/Tasklist";

function App() {
  return (
    <>
      <Navbar />
      <div className="relative h-full">
        <Tasklist />
        <div className="absolute left-3/4 top-[80%]">
          <Add />
        </div>
      </div>
    </>
  );
}

export default App;

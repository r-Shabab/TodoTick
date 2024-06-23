import { useState } from "react";
import Dashboard from "./components/new design/Dashboard";
import { Navbar } from "./components/new design/Navbar";

function App() {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className="flex h-screen overflow-hidden">
      <Navbar expanded={expanded} setExpanded={setExpanded} />
      <main
        className={`flex-1 overflow-hidden transition-all duration-300 ${expanded ? "ml-[15%]" : "ml-[5%]"}`}
      >
        <Dashboard />
      </main>
    </div>
  );
}

export default App;

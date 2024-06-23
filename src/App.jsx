import { useState } from "react";
import Dashboard from "./components/layout/Dashboard";
import { Navbar } from "./components/common/navbars/Navbar";
import { MobileNavbar } from "./components/common/navbars/MobileNavbar";

function App() {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="">
        <MobileNavbar expanded={expanded} setExpanded={setExpanded} />
      </div>
      <Navbar expanded={expanded} setExpanded={setExpanded} />
      <main
        className={`flex-1 overflow-hidden transition-all duration-300 ${expanded ? "lg:ml-[15%]" : "lg:ml-[5%]"}`}
      >
        <Dashboard />
      </main>
    </div>
  );
}

export default App;

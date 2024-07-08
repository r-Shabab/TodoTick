import { useState } from "react";
import Dashboard from "./components/layout/Dashboard";
import DesktopNavbar from "./components/common/navbars/DesktopNavbar";
import MobileNavbar from "./components/common/navbars/MobileNavbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllTasksPage from "./components/pages/AllTasksPage";
import CompletedTasksPage from "./components/pages/CompletedTasksPage";
import DeletedTasksPage from "./components/pages/DeletedTasksPage";
import PinnedTasksPage from "./components/pages/PinnedTasksPage";
import { TaskProvider } from "./components/contexts/TaskContext";

function App() {
  const [expanded, setExpanded] = useState(true);

  return (
    <TaskProvider>
      <Router>
        <div className="flex h-screen overflow-hidden">
          <div>
            <MobileNavbar expanded={expanded} setExpanded={setExpanded} />
          </div>
          <DesktopNavbar expanded={expanded} setExpanded={setExpanded} />
          <main
            className={`flex-1 overflow-hidden transition-all duration-300 ${expanded ? "lg:ml-[15%]" : "lg:ml-[5%]"}`}
          >
            <Routes>
              <Route path="/" element={<Dashboard />}>
                <Route index element={<AllTasksPage />} />
                <Route path="all-tasks" element={<AllTasksPage />} />
                <Route
                  path="completed-tasks"
                  element={<CompletedTasksPage />}
                />
                <Route path="deleted-tasks" element={<DeletedTasksPage />} />
                <Route path="pinned-tasks" element={<PinnedTasksPage />} />
              </Route>
            </Routes>
          </main>
        </div>
      </Router>
    </TaskProvider>
  );
}

export default App;

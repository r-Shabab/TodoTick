import { useState } from "react";
import Dashboard from "./components/layout/Dashboard";
import DesktopNavbar from "./components/common/navbars/DesktopNavbar";
import BottomNavbar from "./components/common/navbars/BottomNavbar.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllTasksPage from "./components/pages/AllTasksPage";
import CompletedTasksPage from "./components/pages/CompletedTasksPage";
import DeletedTasksPage from "./components/pages/DeletedTasksPage";
import PinnedTasksPage from "./components/pages/PinnedTasksPage";
import { TaskProvider } from "./components/context/TaskContext";

function App() {
  const [expanded, setExpanded] = useState(true);

  return (
    <TaskProvider>
      <Router>
        <div className="flex h-screen overflow-hidden">
          {/* <MobileNavbar expanded={expanded} setExpanded={setExpanded} /> */}
          <DesktopNavbar expanded={expanded} setExpanded={setExpanded} />
          <main
            className={`flex-1 overflow-hidden transition-all duration-300 ${
              expanded ? "xl:ml-80" : "xl:ml-[0%]"
            }`}
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
          <BottomNavbar />
        </div>
      </Router>
    </TaskProvider>
  );
}

export default App;

import { useState, useEffect } from "react";
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
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme : "light";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <TaskProvider>
      <Router>
        <div className="flex h-screen overflow-hidden">
          <DesktopNavbar
            expanded={expanded}
            setExpanded={setExpanded}
            theme={theme}
            toggleTheme={toggleTheme}
          />
          <main
            className={`flex-1 overflow-hidden transition-all duration-300 ${
              expanded ? "xl:ml-72" : "xl:ml-0"
            } bg-color-background`}
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

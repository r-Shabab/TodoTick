import { Logo } from "./Logo";
import { GoSidebarExpand } from "react-icons/go";
import { GoSidebarCollapse } from "react-icons/go";
import { FaTasks } from "react-icons/fa";
import { BsPinAngle } from "react-icons/bs";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
// import { LuKanbanSquare } from "react-icons/lu";
import { AiOutlineDelete } from "react-icons/ai";
import { FiSun } from "react-icons/fi";
import { FiMoon } from "react-icons/fi";
import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
export const Navbar = ({ expanded, setExpanded }) => {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    // Set the initial theme based on the data-theme attribute
    const initialTheme =
      document.documentElement.getAttribute("data-theme") || "light";
    setTheme(initialTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <>
      <aside
        className={`fixed h-screen transition-all duration-300 ${
          expanded ? "w-[70%] sm:w-[50%] lg:w-[15%]" : "w-0 lg:w-[5%]"
        } z-20`}
      >
        <nav
          id="desktopNav"
          className={`flex h-full w-full flex-col justify-between bg-color-sidebar px-6 font-title text-xl shadow-md transition-transform ${
            expanded ? "translate-x-0" : "-translate-x-full"
          } xl:translate-x-0`}
        >
          <div className="space-y-4">
            <div
              className={`flex w-full items-center overflow-hidden py-2 transition-all ${expanded ? "justify-between" : "justify-center"}`}
            >
              <a
                href="#"
                className={`overflow-hidden transition-all ${expanded ? "w-full" : "w-0"}`}
              >
                <Logo />
              </a>
              <button
                onClick={() => setExpanded((curr) => !curr)}
                className={`flex items-center justify-center rounded-lg p-3 hover:bg-color-background ${expanded ? "" : "w-full"}`}
              >
                {expanded ? (
                  <>
                    <GoSidebarExpand className="text-color-text h-7 w-7" />
                  </>
                ) : (
                  <GoSidebarCollapse className="text-color-text h-7 w-7" />
                )}
              </button>
            </div>
            <div className="space-y-3 rounded-lg">
              <div
                className={`overflow-hidden rounded-lg transition-all ${expanded ? "w-full p-2" : ""}`}
              >
                <h3
                  className={`text-color-text font-title text-lg font-semibold underline underline-offset-2 ${expanded ? "" : "text-center"}`}
                >
                  MENU
                </h3>
              </div>
              <ul className="space-y-2 rounded-lg">
                <li
                  className={`text-color-text hover:text-color-text flex cursor-pointer items-center space-x-3 rounded-lg bg-color-menu p-3 font-title text-xl hover:bg-color-background hover:font-semibold ${expanded ? "justify-start" : "justify-center"}`}
                >
                  <FaTasks className="h-7 w-7" />
                  <span
                    className={`overflow-hidden transition-all ${expanded ? "w-full" : "hidden"}`}
                  >
                    All Tasks
                  </span>
                </li>
                <li
                  className={`hover:text-add-btn text-color-text flex cursor-pointer items-center space-x-3 rounded-lg bg-color-background p-3 font-title text-xl hover:bg-color-menu hover:font-semibold ${expanded ? "justify-start" : "justify-center"}`}
                >
                  <BsPinAngle className="h-7 w-7" />
                  <span
                    className={`overflow-hidden transition-all ${expanded ? "w-full" : "hidden"}`}
                  >
                    Pinned
                  </span>
                </li>
                <li
                  className={`hover:text-add-btn text-color-text flex cursor-pointer items-center space-x-3 rounded-lg bg-color-background p-3 font-title text-xl hover:bg-color-menu hover:font-semibold ${expanded ? "justify-start" : "justify-center"}`}
                >
                  <IoCheckmarkCircleOutline className="h-7 w-7" />
                  <span
                    className={`overflow-hidden transition-all ${expanded ? "w-full" : "hidden"}`}
                  >
                    Completed
                  </span>
                </li>
                {/* <li
                className={`flex cursor-pointer items-center space-x-3 rounded-lg p-3 font-title text-xl hover:bg-light-menu-bg hover:font-semibold hover:text-add-btn ${expanded ? "justify-start" : "justify-center"}`}
                >
                <LuKanbanSquare className="h-7 w-7" />
                <span
                className={`overflow-hidden transition-all ${expanded ? "w-full" : "hidden"}`}
                >
                Kanban Board
                </span>
                </li> */}
                <li
                  className={`hover:text-add-btn text-color-text flex cursor-pointer items-center space-x-3 rounded-lg bg-color-background p-3 font-title text-xl hover:bg-color-menu hover:font-semibold ${expanded ? "justify-start" : "justify-center"}`}
                >
                  <AiOutlineDelete className="h-7 w-7" />
                  <span
                    className={`overflow-hidden transition-all ${expanded ? "w-full" : "hidden"}`}
                  >
                    Deleted
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-center pb-10">
            <button
              className={`text-color-text flex items-center justify-center space-x-2 rounded-lg bg-color-background p-3 hover:bg-color-menu ${expanded ? "px-10 py-5" : "w-full"}`}
              onClick={toggleTheme}
            >
              {theme === "light" ? (
                <FiSun className="h-7 w-7" />
              ) : (
                <FiMoon className="h-7 w-7" />
              )}
              <span
                className={`overflow-hidden font-title text-xl transition-all ${expanded ? "w-full" : "hidden"}`}
              >
                {theme === "light" ? "Light" : "Dark"}
              </span>
            </button>
          </div>
        </nav>
      </aside>
    </>
  );
};

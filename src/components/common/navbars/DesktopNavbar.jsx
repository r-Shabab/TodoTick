import { Logo } from "../Logo";
import { GoSidebarExpand } from "react-icons/go";
import { GoSidebarCollapse } from "react-icons/go";
import { MdOutlineChecklist } from "react-icons/md";
import { BsPinAngle } from "react-icons/bs";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
// import { LuKanbanSquare } from "react-icons/lu";
import { AiOutlineDelete } from "react-icons/ai";
import { FiSun } from "react-icons/fi";
import { FiMoon } from "react-icons/fi";
import { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";

// eslint-disable-next-line react/prop-types
const DesktopNavbar = ({ expanded, setExpanded }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
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
    <aside
      className={`fixed h-screen transition-all duration-300 ${
        expanded
          ? "w-[70%] sm:w-[50%] lg:w-[15%] xl:w-[20%]"
          : "w-0 lg:w-[16%] xl:w-[10%] 2xl:w-[7%]"
      } z-20`}
    >
      <nav
        className={`flex h-full w-full flex-col justify-between bg-color-sidebar px-6 py-6 font-nav text-xl shadow-md transition-transform ${
          expanded ? "translate-x-0" : "-translate-x-full"
        } xl:translate-x-0`}
      >
        <div className="space-y-4">
          <div
            className={`flex w-full items-center overflow-hidden py-2 transition-all ${
              expanded ? "justify-between" : "justify-center"
            }`}
          >
            <Link
              to="/"
              className={`overflow-hidden transition-all ${
                expanded ? "w-full" : "w-0"
              }`}
            >
              <Logo />
            </Link>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setExpanded((curr) => !curr)}
              className={`flex items-center justify-center rounded-lg p-3 hover:bg-color-background ${
                expanded ? "" : "w-full"
              }`}
            >
              {expanded ? (
                <GoSidebarExpand className="h-7 w-7 text-color-text" />
              ) : (
                <GoSidebarCollapse className="h-7 w-7 text-color-text" />
              )}
            </motion.button>
          </div>
          <div className="space-y-3 rounded-lg">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className={`overflow-hidden rounded-lg transition-all ${
                expanded ? "w-full p-2" : ""
              }`}
            >
              <h3
                className={`font-nav text-lg text-color-text underline underline-offset-2 ${
                  expanded ? "" : "text-center"
                }`}
              >
                MENU
              </h3>
            </motion.div>
            <ul className="space-y-2 rounded-lg">
              <motion.li
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <NavLink
                  to="all-tasks"
                  className={({ isActive }) =>
                    `${
                      isActive ? "bg-color-menu font-semibold" : ""
                    } flex cursor-pointer items-center space-x-3 rounded-lg p-3 font-nav text-lg text-color-text hover:bg-color-menu/45 hover:text-color-text lg:text-xl ${
                      expanded ? "justify-start" : "justify-center"
                    }`
                  }
                >
                  <MdOutlineChecklist className="h-7 w-7" />
                  <span
                    className={`overflow-hidden transition-all ${
                      expanded ? "w-full" : "hidden"
                    }`}
                  >
                    All Tasks
                  </span>
                </NavLink>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <NavLink
                  to="/pinned-tasks"
                  className={({ isActive }) =>
                    `${
                      isActive ? "bg-color-menu font-semibold" : ""
                    } hover:text-add-btn flex cursor-pointer items-center space-x-3 rounded-lg p-3 font-nav text-lg text-color-text hover:bg-color-menu/45 lg:text-xl ${
                      expanded ? "justify-start" : "justify-center"
                    }`
                  }
                >
                  <BsPinAngle className="h-7 w-7" />
                  <span
                    className={`overflow-hidden transition-all ${
                      expanded ? "w-full" : "hidden"
                    }`}
                  >
                    Pinned
                  </span>
                </NavLink>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <NavLink
                  to="/completed-tasks"
                  className={({ isActive }) =>
                    `${
                      isActive ? "bg-color-menu font-semibold" : ""
                    } hover:text-add-btn flex cursor-pointer items-center space-x-3 rounded-lg p-3 font-nav text-lg text-color-text hover:bg-color-menu/45 lg:text-xl ${
                      expanded ? "justify-start" : "justify-center"
                    } `
                  }
                >
                  <IoCheckmarkCircleOutline className="h-7 w-7" />
                  <span
                    className={`overflow-hidden transition-all ${
                      expanded ? "w-full" : "hidden"
                    }`}
                  >
                    Completed
                  </span>
                </NavLink>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <NavLink
                  to="/deleted-tasks"
                  className={({ isActive }) =>
                    `${
                      isActive ? "bg-color-menu font-semibold" : ""
                    } hover:text-add-btn flex cursor-pointer items-center space-x-3 rounded-lg p-3 font-nav text-lg text-color-text hover:bg-color-menu/45 lg:text-xl ${
                      expanded ? "justify-start" : "justify-center"
                    }`
                  }
                >
                  <AiOutlineDelete className="h-7 w-7" />
                  <span
                    className={`overflow-hidden transition-all ${
                      expanded ? "w-full" : "hidden"
                    }`}
                  >
                    Deleted
                  </span>
                </NavLink>
              </motion.li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center pb-10">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`flex items-center justify-center space-x-2 rounded-lg bg-color-background p-3 text-color-text hover:bg-color-menu/45 active:font-semibold ${
              expanded ? "px-10 py-5" : "w-full"
            }`}
            onClick={toggleTheme}
          >
            {theme === "light" ? (
              <FiSun className="h-7 w-7" />
            ) : (
              <FiMoon className="h-7 w-7" />
            )}
            <span
              className={`overflow-hidden font-button text-xl transition-all ${
                expanded ? "w-full" : "hidden"
              }`}
            >
              {theme === "light" ? "Light" : "Dark"}
            </span>
          </motion.button>
        </div>
      </nav>
    </aside>
  );
};

export default DesktopNavbar;

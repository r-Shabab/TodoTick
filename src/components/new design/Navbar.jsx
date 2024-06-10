import { Logo } from "./Logo";
import { GoSidebarExpand } from "react-icons/go";
import { GoSidebarCollapse } from "react-icons/go";
import { FaTasks } from "react-icons/fa";
import { BsPinAngle } from "react-icons/bs";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { LuKanbanSquare } from "react-icons/lu";
import { AiOutlineDelete } from "react-icons/ai";
import { FiSun } from "react-icons/fi";
import { BiSort } from "react-icons/bi";
import { useState } from "react";
export const Navbar = () => {
  const [expanded, setExpanded] = useState(true);
  return (
    <aside className="relative h-screen">
      <nav
        id="mobileNav"
        className="-z-20 flex items-center justify-between bg-light-sidebar p-5 xl:hidden"
      >
        <div>
          <button onClick={() => setExpanded((curr) => !curr)} className="">
            <GoSidebarCollapse className="h-7 w-7" />
          </button>
        </div>
        <div>
          <span className="font-title text-xl font-semibold">Add Task</span>
        </div>
        <span>
          <BiSort className="h-7 w-7" />
        </span>
      </nav>
      <nav
        id="desktopNav"
        className={`absolute top-0 z-20 flex h-full flex-col justify-between overflow-hidden bg-light-sidebar px-6 font-title text-xl shadow-md transition-all xl:flex ${expanded ? "w-[75%] md:w-[40%] xl:w-3/12 2xl:w-1/6" : "hidden xl:w-[8%] 2xl:w-[5%]"}`}
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
              className={`flex items-center justify-center rounded-lg p-3 hover:bg-gray-100 ${expanded ? "" : "w-full"}`}
            >
              {expanded ? (
                <>
                  <GoSidebarExpand className="h-7 w-7" />
                </>
              ) : (
                <GoSidebarCollapse className="h-7 w-7" />
              )}
            </button>
          </div>
          <div className="space-y-3 rounded-lg">
            <div
              className={`overflow-hidden rounded-lg transition-all ${expanded ? "w-full p-2" : ""}`}
            >
              <h3
                className={`font-title text-lg font-semibold underline underline-offset-2 ${expanded ? "" : "text-center"}`}
              >
                MENU
              </h3>
            </div>
            <ul className="space-y-2 rounded-lg">
              <li
                className={`flex cursor-pointer items-center space-x-3 rounded-lg bg-light-menu-bg p-3 font-title text-xl text-add-btn hover:bg-light-menu-bg hover:font-semibold hover:text-add-btn ${expanded ? "justify-start" : "justify-center"}`}
              >
                <FaTasks className="h-7 w-7" />
                <span
                  className={`overflow-hidden transition-all ${expanded ? "w-full" : "hidden"}`}
                >
                  All Tasks
                </span>
              </li>
              <li
                className={`flex cursor-pointer items-center space-x-3 rounded-lg p-3 font-title text-xl hover:bg-light-menu-bg hover:font-semibold hover:text-add-btn ${expanded ? "justify-start" : "justify-center"}`}
              >
                <BsPinAngle className="h-7 w-7" />
                <span
                  className={`overflow-hidden transition-all ${expanded ? "w-full" : "hidden"}`}
                >
                  Pinned
                </span>
              </li>
              <li
                className={`flex cursor-pointer items-center space-x-3 rounded-lg p-3 font-title text-xl hover:bg-light-menu-bg hover:font-semibold hover:text-add-btn ${expanded ? "justify-start" : "justify-center"}`}
              >
                <IoCheckmarkCircleOutline className="h-7 w-7" />
                <span
                  className={`overflow-hidden transition-all ${expanded ? "w-full" : "hidden"}`}
                >
                  Completed
                </span>
              </li>
              <li
                className={`flex cursor-pointer items-center space-x-3 rounded-lg p-3 font-title text-xl hover:bg-light-menu-bg hover:font-semibold hover:text-add-btn ${expanded ? "justify-start" : "justify-center"}`}
              >
                <LuKanbanSquare className="h-7 w-7" />
                <span
                  className={`overflow-hidden transition-all ${expanded ? "w-full" : "hidden"}`}
                >
                  Kanban Board
                </span>
              </li>
              <li
                className={`flex cursor-pointer items-center space-x-3 rounded-lg p-3 font-title text-xl hover:bg-light-menu-bg hover:font-semibold hover:text-add-btn ${expanded ? "justify-start" : "justify-center"}`}
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
            className={`flex items-center justify-center space-x-2 rounded-lg bg-light-body p-3 hover:bg-gray-300 ${expanded ? "px-10 py-5" : "w-full"}`}
          >
            <FiSun className="h-7 w-7" />
            <span
              className={`overflow-hidden font-title text-xl transition-all ${expanded ? "w-full" : "hidden"}`}
            >
              Light
            </span>
          </button>
        </div>
      </nav>
    </aside>
  );
};

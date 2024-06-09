import { CgMenuLeftAlt } from "react-icons/cg";
import { Logo } from "./Logo";
import { RiTodoFill } from "react-icons/ri";
import { FaCheck } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { useState } from "react";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <nav className="relative z-10 w-full rounded-b-lg shadow-lg">
      <div className="flex items-center justify-between bg-white px-4 py-6">
        <button className="nav-btn cursor-pointer" onClick={toggleNav}>
          <CgMenuLeftAlt
            className={`${
              isNavOpen ? "text-red-700" : "text-primary1"
            } h-7 w-7 hover:text-red-700 lg:h-10 lg:w-10`}
          />
        </button>
        <Logo></Logo>
        <span></span>
      </div>
      <div
        className={`nav-items absolute top-[100%] flex w-3/4 flex-col rounded-br-lg rounded-tr-lg transition-transform duration-300 md:w-1/4 ${
          isNavOpen ? "translate-x-0" : "-translate-x-full"
        } `}
      >
        <ul className="h-dvh space-y-3 bg-slate-800 p-5">
          <li className="flex items-center space-x-2 rounded-md p-2 hover:cursor-pointer hover:bg-slate-700 lg:justify-center">
            <RiTodoFill className="text-primary1 hover:text-accent h-5 w-1/12 lg:h-7 lg:w-7" />
            <span className="w-11/12 text-lg font-bold text-white lg:hidden">
              Tasks
            </span>
          </li>
          <li className="flex items-center space-x-2 rounded-md p-2 hover:cursor-pointer hover:bg-slate-700">
            <FaCheck className="text-primary1 h-5 w-1/12 lg:h-7" />
            <span className="w-11/12 text-lg font-bold text-white lg:text-xl">
              Completed Tasks
            </span>
          </li>
          <li className="flex items-center space-x-2 rounded-md p-2 hover:cursor-pointer hover:bg-slate-700">
            <AiFillDelete className="text-primary1 h-5 w-1/12 lg:h-7" />
            <span className="w-11/12 text-lg font-bold text-white lg:text-xl">
              Deleted Tasks
            </span>
          </li>
        </ul>
      </div>
    </nav>
  );
}

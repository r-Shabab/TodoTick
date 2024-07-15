import { NavLink } from "react-router-dom";
import { MdOutlineChecklist } from "react-icons/md";
import { BsPinAngle } from "react-icons/bs";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { AiOutlineDelete } from "react-icons/ai";
import { FiSun, FiMoon } from "react-icons/fi";
import { useState, useEffect } from "react";

const BottomNavbar = () => {
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
    <nav className="fixed bottom-0 left-0 right-0 z-30 flex h-16 w-full items-center justify-between bg-color-sidebar shadow-md xl:hidden">
      <NavLink to="/all-tasks" className="flex flex-1 justify-center">
        <MdOutlineChecklist className="h-7 w-7 text-color-text" />
      </NavLink>
      <NavLink to="/pinned-tasks" className="flex flex-1 justify-center">
        <BsPinAngle className="h-7 w-7 text-color-text" />
      </NavLink>
      <NavLink to="/completed-tasks" className="flex flex-1 justify-center">
        <IoCheckmarkCircleOutline className="h-7 w-7 text-color-text" />
      </NavLink>
      <NavLink to="/deleted-tasks" className="flex flex-1 justify-center">
        <AiOutlineDelete className="h-7 w-7 text-color-text" />
      </NavLink>
      <button onClick={toggleTheme} className="flex flex-1 justify-center">
        {theme === "light" ? (
          <FiSun className="h-7 w-7 text-color-text" />
        ) : (
          <FiMoon className="h-7 w-7 text-color-text" />
        )}
      </button>
    </nav>
  );
};

export default BottomNavbar;

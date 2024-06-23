import { GoSidebarCollapse } from "react-icons/go";
import { BiSort } from "react-icons/bi";
// eslint-disable-next-line react/prop-types
export const MobileNavbar = ({ setExpanded }) => {
  return (
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
  );
};

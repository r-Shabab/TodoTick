import { GoSidebarCollapse, GoSidebarExpand } from "react-icons/go";
import { Logo } from "./Logo";

// eslint-disable-next-line react/prop-types
export const MobileNavbar = ({ expanded, setExpanded }) => {
  return (
    <nav
      id="mobileNav"
      className="fixed left-0 right-0 top-0 z-30 flex h-20 w-full items-center justify-between bg-light-sidebar p-5 shadow-md xl:hidden"
    >
      <button onClick={() => setExpanded((curr) => !curr)} className="mr-auto">
        {expanded ? (
          <GoSidebarExpand className="h-7 w-7" />
        ) : (
          <GoSidebarCollapse className="h-7 w-7" />
        )}
      </button>
      <div className="absolute left-1/2 -translate-x-1/2 transform">
        <Logo />
      </div>
    </nav>
  );
};

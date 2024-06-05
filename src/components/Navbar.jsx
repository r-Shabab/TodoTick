import { CgMenuLeftAlt } from "react-icons/cg";
import { Logo } from "./Logo";

export default function Navbar() {
  return (
    <nav className="w-full rounded-b-lg bg-slate-800 px-4 py-6">
      <div className="flex items-center justify-between">
        <button className="cursor-pointer">
          <CgMenuLeftAlt className="h-7 w-7 text-emerald-200 hover:text-emerald-600 lg:h-10 lg:w-10" />
        </button>
        <Logo></Logo>
        <span></span>
      </div>
    </nav>
  );
}

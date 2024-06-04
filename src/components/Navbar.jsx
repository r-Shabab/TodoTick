import { CgMenuLeftAlt } from "react-icons/cg";
import { Logo } from "./Logo";

export default function Navbar() {
  return (
    <nav className="w-full rounded-bl-lg rounded-br-lg bg-slate-900 px-3 py-6">
      <div className="flex items-center justify-between gap-4">
        <CgMenuLeftAlt className="h-7 w-7 text-emerald-200 hover:text-emerald-600" />
        <Logo></Logo>
        <span></span>
      </div>
    </nav>
  );
}

import { LuListTodo } from "react-icons/lu";
export const Logo = () => {
  return (
    <div id="logo" className="flex items-center gap-2">
      <span className="text-xl font-bold text-emerald-100">TodoTick</span>
      <LuListTodo className="h-7 w-7 rounded-full bg-white px-1 text-emerald-900" />
    </div>
  );
};

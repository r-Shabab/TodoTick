import { LuListTodo } from "react-icons/lu";
export const Logo = () => {
  return (
    <div id="logo" className="flex items-center gap-2 hover:cursor-pointer">
      <span className="font-dosis text-xl font-bold text-emerald-300 lg:text-4xl">
        TodoTick
      </span>
      <LuListTodo className="h-7 w-7 rounded-full bg-white px-1 text-emerald-900 lg:h-12 lg:w-12" />
    </div>
  );
};

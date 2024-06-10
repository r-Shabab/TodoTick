import { LuListTodo } from "react-icons/lu";
export const Logo = () => {
  return (
    <div id="logo" className="flex items-center gap-2 hover:cursor-pointer">
      <span className="font-title text-xl font-bold text-primary1 lg:text-4xl">
        TodoTick
      </span>
      <LuListTodo className="h-7 w-7 rounded-full bg-primary1 px-1 text-white lg:h-12 lg:w-12" />
    </div>
  );
};

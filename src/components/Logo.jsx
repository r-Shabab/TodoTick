import { LuListTodo } from "react-icons/lu";
export const Logo = () => {
  return (
    <div id="logo" className="flex items-center gap-2 hover:cursor-pointer">
      <span className="text-primary1 font-dosis text-xl font-bold lg:text-4xl">
        TodoTick
      </span>
      <LuListTodo className="bg-primary1 h-7 w-7 rounded-full px-1 text-white lg:h-12 lg:w-12" />
    </div>
  );
};

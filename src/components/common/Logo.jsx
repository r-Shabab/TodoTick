import { AiOutlineCheckCircle } from "react-icons/ai";
export const Logo = () => {
  return (
    <div className="flex items-center space-x-1">
      <AiOutlineCheckCircle className="fill-color-primary-btn text-3xl transition-all duration-100 hover:fill-cyan-800" />
      <h1 className="font-logo text-4xl tracking-tighter text-color-primary-btn transition-all duration-100 hover:text-cyan-800">
        TodoTick
      </h1>
    </div>
  );
};

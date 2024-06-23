// import LogoLight from "../../assets/LogoLight.png";
// import LogoDark from "../../assets/LogoDark.png";
import { AiOutlineCheckCircle } from "react-icons/ai";
export const Logo = () => {
  return (
    <div className="flex items-center space-x-1">
      {/* <img src={LogoLight} alt="" className="w-[60%]" />
      <img src={LogoDark} alt="" className="hidden" /> */}
      <AiOutlineCheckCircle className="fill-color-primary-btn text-3xl" />
      <h1 className="font-logo text-4xl font-black tracking-tighter text-color-primary-btn">
        TodoTick
      </h1>
    </div>
  );
};

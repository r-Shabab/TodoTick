// import LogoLight from "../../assets/LogoLight.png";
// import LogoDark from "../../assets/LogoDark.png";
import { AiOutlineCheckCircle } from "react-icons/ai";
export const Logo = () => {
  return (
    <div className="flex items-center space-x-0">
      {/* <img src={LogoLight} alt="" className="w-[60%]" />
      <img src={LogoDark} alt="" className="hidden" /> */}
      <AiOutlineCheckCircle className="fill-add-btn text-3xl" />
      <h1 className="font-logo text-3xl font-black tracking-tighter text-add-btn">
        TodoTick
      </h1>
    </div>
  );
};

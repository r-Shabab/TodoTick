import LogoLight from "../../assets/LogoLight.png";
import LogoDark from "../../assets/LogoDark.png";
export const Logo = () => {
  return (
    <div>
      <img src={LogoLight} alt="" className="w-[60%]" />
      <img src={LogoDark} alt="" className="hidden" />
    </div>
  );
};

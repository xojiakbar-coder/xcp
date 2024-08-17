import Image from "next/image";
import Profiles from "./profiles";
import { Link } from "react-scroll";
import pagesData from "@/utils/pages";
import logo from "../../../public/assets/images/logo/none-bg.png";

const Navbar: React.FC = () => {
  return (
    <>
      <div className="flex justify-between items-center xl:px-[50px] lg:px-[30px] md:px-[12px] sm:px-[10px] px-[12px] h-[80px] backdrop-blur-[10px] border-b-[0.3px] border-gray-500 z-50">
        <div className="flex flex-row gap-[25px]">
          <Link to="home" smooth={true} duration={500}>
            <Image
              src={logo}
              alt="logonot found"
              className="w-[110px] h-[73px] cursor-pointer rounded-lg"
            />
          </Link>
          <div className="xl:flex lg:flex md:flex items-center lg:gap-[22px] md:gap-[5px] hidden">
            {pagesData &&
              pagesData?.map((item) => {
                return (
                  item.navbar && (
                    <div
                      className="hover:bg-[rgb(255_255_255_/_0.9)] hover:text-black text-white bg-transparent backdrop-blur-[10px] transition duration-150 ease-out hover:ease-in select-none py-2 px-3 rounded-lg cursor-pointer hover:[text-shadow:_0_0_20px_rgb(250_250_250_/_0.9)]"
                      key={item.id}
                    >
                      <Link
                        to={item.path}
                        smooth={true}
                        duration={500}
                        className="pt-[7px] font-semibold font-josefin-font"
                      >
                        {item.title}
                      </Link>
                    </div>
                  )
                );
              })}
          </div>
        </div>
        <div>
          <Profiles />
        </div>
      </div>
    </>
  );
};

export default Navbar;

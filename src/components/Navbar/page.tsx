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
                      className="flex items-center border-2 border-transparent py-3 px-4 rounded-xl hover:border-hover-border hover:bg-transparent cursor-pointer transition duration-200 ease-out hover:ease-in backdrop-blur-[10px]"
                      key={item.id}
                    >
                      <Link
                        to={item.path}
                        smooth={true}
                        duration={500}
                        className="pt-[4px] font-semibold font-josefin-font text-white"
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

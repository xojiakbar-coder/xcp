import Image from "next/image";
import Profiles from "./profiles";
import { Link } from "react-scroll";
import pagesData from "@/utils/pages";
import { useDrawer } from "@/context/DrawerContext";
import logo from "../../../public/assets/images/logo/none-bg.png";

const Navbar: React.FC = () => {
  const { isOpen, toggleDrawer } = useDrawer();

  return (
    <div className="flex justify-center h-[100px] backdrop-blur-[10px] border-b-[0.3px] border-gray-500">
      <div className="flex justify-between lg:w-[87%] md:w-full sm:w-[85%] items-center z-50">
        <div className="flex flex-row gap-[25px]">
          <Link to="home" smooth={true} duration={500}>
            <Image
              src={logo}
              alt="logonot found"
              className="w-[110px] h-[73px] cursor-pointer rounded-lg"
            />
          </Link>
          <div className="xl:flex lg:flex md:flex items-center lg:gap-[15px] md:gap-[5px] hidden">
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
        <div className="flex items-center gap-[20px]">
          <Profiles />
          <button
            onClick={toggleDrawer}
            className="text-white lg:hidden md:hidden"
          >
            Menu
          </button>
          <div>
            <a
              className="decoration-0"
              href="https://t.me//xojiakbar_dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-button-bg sm:hidden min-w-[155px] h-max min-h-max py-3 border-[3.5px] border-transparent text-white font-mont-font uppercase font-semibold text-[15px] rounded-xl hover:border-blue-border hover:border-[3.5px] hover:bg-none cursor-pointer transition duration-[1000ms]">
                Contact Me
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

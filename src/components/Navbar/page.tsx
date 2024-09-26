import Image from "next/image";
import Profiles from "./profiles";
import { Link } from "react-scroll";
import pagesData from "@/utils/pages";
import { useDrawer } from "@/context/DrawerContext";
import logo from "../../../public/assets/images/logo/none-bg.png";
import menuIcon from "../../../public/assets/icons/menu.svg";

const Navbar: React.FC = () => {
  const { isOpen, toggleDrawer } = useDrawer();

  return (
    <div className="flex justify-center h-[100px] backdrop-blur-[10px] border-b-[0.3px] border-gray-500">
      <div className="flex justify-between lg:w-[87%] md:w-full sm:w-[85%] min-w-full sm:px-[2%] items-center z-50 px-[20px]">
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
            <Image
              src={menuIcon}
              alt="menu icon not found"
              className="p-0 cursor-pointer w-[32px]"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

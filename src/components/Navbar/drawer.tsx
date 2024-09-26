import React from "react";
import { useDrawer } from "@/context/DrawerContext";
import closeIcon from "../../../public/assets/icons/close.svg";
import logo from "../../../public/assets/images/logo/none-bg.png";
import Image from "next/image";
import pagesData from "@/utils/pages";
import { Link } from "react-scroll";
import Profiles from "./profiles";
import profileData from "@/utils/profiles";
const Drawer: React.FC = () => {
  const { isOpen, toggleDrawer } = useDrawer();

  return (
    <>
      <div
        className={`absolute z-[999] lg:hidden md:hidden top-0 left-0 h-[100vh] w-full border bg-[#1A2130] text-white transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <div className="flex w-full justify-between px-[20px] border-b-[0.3px] border-gray-500 bg-[#1A2130] pt-[10px]">
          <Image
            src={logo}
            alt="logonot found"
            className="w-[110px] h-[73px] cursor-pointer rounded-lg"
          />
          <button onClick={toggleDrawer}>
            <Image
              src={closeIcon}
              alt="close icon not found"
              className="w-[32px]"
            />
          </button>
        </div>
        <div>
          <div className="flex justify-center flex-col items-center w-[100%] pt-[3%] px-[2%]">
            {pagesData &&
              pagesData?.map((item) => {
                return (
                  item.navbar && (
                    <div
                      className="flex items-center w-full my-[20px] border-2 border-gray-800 py-3 px-4 rounded-xl hover:border-hover-border hover:bg-transparent cursor-pointer transition duration-200 ease-out hover:ease-in backdrop-blur-[10px]"
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
          <div className="flex justify-center flex-row items-center w-full xl:gap-[50px] lg:gap-[22px] md:gap-[6px] gap-[30px] mt-[20px]">
            {profileData.map((itme) => {
              return (
                <a
                  target="_blank"
                  href={itme.href}
                  key={itme.id}
                  className="border-2 border-transparent p-2 rounded-xl hover:border-hover-border hover:bg-gray-950 transition duration-200 ease-out hover:ease-in backdrop-blur-[10px]"
                >
                  <Image
                    src={itme.icon}
                    alt="icon not found"
                    className="w-[28px]"
                  />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Drawer;

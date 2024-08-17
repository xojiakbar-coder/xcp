import React from "react";
import Profiles from "../Navbar/profiles";

const Footer = () => {
  const date = new Date();
  return (
    <div>
      <div className="flex flex-col justify-center w-full mt-[50px] pt-3">
        <div className="flex justify-center w-full">
          <div className="h-[1px] bg-[#333] w-[85.1%]" />
        </div>
        <div className="flex justify-center w-full pt-[30px]">
          <div className="flex flex-col justify-center gap-[100px] pt-[20px] pb-[25px] w-[85%] h-max">
            <div className="flex justify-start xl:flex-row lg:flex-row md:flex-row flex-col xl:gap-[100px] lg:gap-[100px] md:gap-[100px] gap-[20px] xl:items-center lg:items-center md:items-center items-start w-full">
              <div>
                <h3 className="font-josefin-font text-[#999] font-[800]">
                  CALL
                </h3>
                <h5 className="text-light-color font-mont-font">
                  +998 99 195 45 35
                </h5>
              </div>
              <div>
                <h3 className="font-josefin-font text-[#999] font-[800]">
                  EMAIL
                </h3>
                <h5 className="text-light-color font-mont-font">
                  xojiakbarisroilov.777@gmail.com
                </h5>
              </div>
            </div>
            <div className="flex justify-between w-full xl:flex-row lg:flex-row md:flex-row flex-col xl:items-center lg:items-center items-center xl:gap-[10px] lg:gap-[10px] md:gap-[10px] gap-[20px]">
              <div className="w-full flex xl:lg:justify-start lg:justify-start md:lg:justify-start">
                <Profiles />
              </div>
              <div className="w-full flex xl:lg:justify-end lg:justify-end md:lg:justify-end sm:justify-end">
                <h3 className="font-mont-font text-light-color font-medium">
                  © 2022 - {date.getFullYear().toString()} Isroilov Xojiakbar
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

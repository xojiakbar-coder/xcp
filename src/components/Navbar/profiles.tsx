import React from "react";
import Image from "next/image";
import profileData from "@/utils/profiles";

const Profiles = () => {
  return (
    <div>
      <div className="md:flex hidden flex-row items-center w-full xl:gap-[50px] lg:gap-[22px] md:gap-[6px] gap-[30px]">
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
  );
};

export default Profiles;

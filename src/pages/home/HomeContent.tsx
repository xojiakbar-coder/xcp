import React from "react";

const HomeContent: React.FC = () => {
  return (
    <div className="flex items-center sm:justify-center md:justify-start w-full sticky h-full z-20 ml-[-10px]">
      <div className="flex flex-col justify-between backdrop-blur-[9px] rounded-xl border-[0.1px] border-gray-500 px-[40px] py-[70px] gap-y-[10px] lg:w-[70%] md:w-[100%] sm:w-[100%] w-full">
        <h1 className="font-josefin-font text-[35px] xl:text-[60px] lg:text-[60px] md:text-[45px] sm:text-[40px] font-[700] text-light-color w-full">
          Xojiakbar Isroilov
        </h1>
        <b className="font-[900] font-josefin-font text-[20px] text-light-color w-full">
          Frontend Engineer
        </b>
        <p className="font-mont-font w-full font-[500] text-light-color">
          Assalamualaikum I am a frontend engineer and I am active in this field
          here you can have complete information about me and also you can see
          my projects
        </p>
        <a
          className="decoration-0"
          href="https://t.me//xojiakbar_dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-button-bg mt-2 w-1/2 h-max min-h-max py-3 border-[3px] border-transparent text-white font-mont-font uppercase font-semibold text-[18px] rounded-xl hover:border-blue-border hover:border-[3px] hover:bg-none cursor-pointer transition duration-[1000ms]">
            Contact Me
          </button>
        </a>
      </div>
    </div>
  );
};

export default HomeContent;

import React from "react";

const HomeContent: React.FC = () => {
  return (
    <div className="flex items-center sm:justify-center md:justify-start w-full h-full absolute z-20 md:pl-[50px] md:px-[10px] sm:px-[10px] px-[0]">
      <div className="flex flex-col justify-between backdrop-blur-[9px] py-[18px] px-[20px] gap-y-[10px] lg:w-[60%] md:w-[75%] sm:w-[90%] w-full">
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
          <button className="bg-light-color mt-2 w-1/2 h-max min-h-max py-3 border-2 border-transparent duration-220 text-black-color hover:text-white font-mont-font uppercase font-semibold text-[18px] rounded-xl hover:border-hover-border hover:bg-transparent cursor-pointer transition duration-200 ease-out hover:ease-in">
            Contact Me
          </button>
        </a>
      </div>
    </div>
  );
};

export default HomeContent;

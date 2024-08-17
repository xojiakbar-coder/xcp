import React from "react";

interface TitlePropsType {
  children: React.ReactNode;
}

const Title: React.FC<TitlePropsType> = ({ children }) => {
  return (
    <div>
      <h1 className="text-light-color text-[30px] xl:text-[40] lg:text-[38] md:text-[35px] sm:text-[30px] font-bold font-josefin-font">
        {children}
      </h1>
    </div>
  );
};

export default Title;

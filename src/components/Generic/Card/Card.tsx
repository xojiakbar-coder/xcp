import React from "react";
import Image, { StaticImageData } from "next/image";
import someImage from "../../../../public/assets/images/projects/udevs.svg";

interface CardPropsType {
  link?: string;
  title?: string;
  img?: StaticImageData;
  type: "primary" | "outlined";
}

const Card: React.FC<CardPropsType> = ({
  img = "",
  link = "",
  title = "",
  type = "outlined",
}) => {
  return (
    <div>
      {type === "primary" && (
        <div
          className={`relative w-full border-none h-max rounded-lg bg-light-color hover:bg-[#021526] transition ease-out cursor-pointer duration-200`}
        >
          <a href={link}>
            <div className="flex justify-center items-center flex-col">
              {type === "primary" && (
                <div className="flex items-center relative h-[400px] xl:px-[20px] lg:px-[20px] md:px-[20px] sm:px-[20px] xl:pt-[60px] lg:pt-[60px] md:pt-[60px] sm:pt-[60px] pt-[60px] px-[2px] xl:pb-[20px] lg:pb-[20px] md:pb-[20px] w-full bg-cover bg-center rounded-lg overflow-hidden group">
                  <Image
                    src={(img && img) || someImage}
                    alt="image not found"
                    className="w-full h-full rounded-md"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 transition-opacity group-hover:bg-opacity-5"></div>
                </div>
              )}
              <div className="absolute top-0 pl-4 bg-[#1F316F] rounded-t-lg border-none w-full py-2">
                <h1 className="text-light-color text-[18px] font-mont-font font-[600]">
                  {title}
                </h1>
              </div>
            </div>
          </a>
        </div>
      )}

      {type === "outlined" && (
        <div
          className={`relative w-full shadow-md hover:shadow-blue-500 py-[12px] h-max rounded-lg bg-light-color hover:ease-in cursor-pointer duration-130 `}
        >
          <div className="flex justify-center w-full">
            <div className="w-[60px] h-[60px]">
              <Image
                src={img && img}
                alt="icon not found"
                className="w-full h-full"
              />
            </div>
          </div>

          <p className="text-black-color mt-3 w-full font-medium text-center">
            {title}
          </p>
        </div>
      )}
    </div>
  );
};

export default Card;

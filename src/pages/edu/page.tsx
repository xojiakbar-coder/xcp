import React from "react";
import Image from "next/image";
import Line from "@/components/Generic/Line/Line";
import Title from "@/components/Generic/Title/Title";
import educationData, { EducationItemType } from "@/utils/edu";

const Education = () => {
  return (
    <div className="flex justify-center w-full mt-[50px] pt-[100px]">
      <div className="w-[85%]">
        <Title>Education</Title>
        <Line />
        <div className="flex flex-col gap-[50px] pt-[30px]">
          {educationData.map((edu: EducationItemType) => {
            const {
              id,
              name_place,
              duration,
              about_course,
              image,
              course_name,
            } = edu;
            return (
              <div
                key={id}
                className="flex flex-col gap-[15px] text-white w-full"
              >
                <div>
                  <Image
                    src={image && image}
                    alt="image not found"
                    className="rounded-xl lg:w-[100px] md:lg:w-[90px] w-[80px] cursor-pointer"
                  />
                </div>
                <div className="pt-[7px] w-full">
                  <h3 className="text-white font-josefin-font lg:text-[26px] md:text-[18px] sm:text-[17px] text-[14px] font-semibold">
                    {name_place}
                  </h3>
                  <div className="flex items-center pt-[2px] justify-between w-full">
                    <h4 className="font-medium font-mont-font xl:text-xl lg:text-[20px] md:text-[13px] sm:text-[12px] text-[12px]">
                      {course_name}
                    </h4>
                    <strong className="font-mont-font font-[500] py-1 px-6 rounded-3xl border xl:text-lg lg:text-[15px] md:text-[14px] sm:text-[12px] text-[12px]">
                      {duration}
                    </strong>
                  </div>
                  <small className="block w-full mt-[7px] lg:text-[16px] md:text-[16px]">
                    {about_course}
                  </small>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Education;

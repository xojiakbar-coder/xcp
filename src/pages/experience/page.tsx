import React from "react";
import Image from "next/image";
import experienceData from "@/utils/experience";
import Line from "@/components/Generic/Line/Line";
import Title from "@/components/Generic/Title/Title";

const Experience = () => {
  return (
    <div className="flex justify-center w-full mt-[50px] pt-[100px]">
      <div className="w-[85%]">
        <Title>Experience</Title>
        <Line />
        <div className="flex flex-col gap-[40px] pt-[30px] text-white">
          {experienceData.map((value) => {
            const {
              id,
              company_name,
              company_logo,
              duration,
              job,
              work_done,
              work_time,
            } = value;
            return (
              <div key={id} className="flex flex-col gap-[15px]">
                <div className="flex flex-row items-center gap-[20px] w-full">
                  <div>
                    <Image
                      src={company_logo && company_logo}
                      alt="company logo not found"
                      className="w-[190px] h-[130px] rounded-lg"
                    />
                  </div>
                  <div className="w-full">
                    <h3 className="font-medium font-josefin-font lg:text-[22px] md:text-[18px] sm:text-[16px] text-[14px]">
                      {company_name}
                    </h3>
                    <div className="flex xl:flex-row lg:flex-row md:flex-row flex-col xl:items-center lg:items-center md:items-center items-start xl:gap-[0px] lg:gap-[0px] md:gap-[0px] gap-[25px] pt-[2px] justify-between w-full">
                      <div className="flex flex-row items-center gap-[17px]">
                        <h3 className="font-medium font-mont-font lg:text-[18px] md:text-[14px] sm:text-[12px] text-[12px]">
                          {job}
                        </h3>
                        <p className="font-mont-font font-medium lg:text-[14px] md:text-[14px] sm:text-[12px] text-[12px]">
                          {work_time}
                        </p>
                      </div>
                      <strong className="font-mont-font font-medium py-2 px-5 rounded-3xl border lg:text-[15px] md:text-[14px] sm:text-[12px] text-[12px]">
                        {duration}
                      </strong>
                    </div>
                  </div>
                </div>
                <div>
                  <ul className="flex flex-col gap-[12px] text-white list-inside">
                    {work_done.map((value) => {
                      return (
                        <li
                          className="list-disc list-item marker:text-white"
                          key={value.id}
                        >
                          {value.description}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Experience;

import React from "react";
import projectsData from "@/utils/projects";
import Card from "@/components/Generic/Card/Card";
import Line from "@/components/Generic/Line/Line";
import Title from "@/components/Generic/Title/Title";

const Projects = () => {
  return (
    <div className="flex justify-center w-full mt-[50px] pt-[100px]">
      <div className="w-[85%]">
        <Title>Projects</Title>
        <Line />
        <div className="flex justify-center w-full pt-[20px]">
          <div className="grid w-[100%] lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-[18px] justify-center mb-2 py-3 backdrop-blur-[50px] rounded-md">
            {projectsData.map((item) => {
              return (
                <Card
                  key={item.id}
                  type="primary"
                  link={item.link}
                  title={item.title}
                  img={item.img}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

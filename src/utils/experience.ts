import { StaticImageData } from "next/image";
import Educore from "../../public/assets/images/experience/educore.jpg";
import Teaching from "../../public/assets/images/experience/teaching.jpg";
import Freelancer from "../../public/assets/images/experience/freelancer.png";

interface ExperienceItemType {
  id: number;
  company_name: string;
  job: string;
  duration: string;
  work_time: string;
  work_done: WorkDoneItem[];
  company_logo: StaticImageData;
}

type WorkDoneItem = {
  id: number;
  description: string;
};

const experienceData: ExperienceItemType[] = [
  {
    id: 1,
    company_name: "Teaching",
    job: "Frontend Mentor",
    duration: "Apr, 2023 - Aug, 2024",
    work_time: "Full-time",
    work_done: [
      {
        id: 1,
        description:
          "I started my career in this field as a mentor, and through this experience, I learned how to mentor by taking classes and strengthening my knowledge.",
      },
      {
        id: 2,
        description:
          "I have been teaching for almost 1.5 years and have shared my knowledge and experience",
      },
      { id: 3, description: "I still teach online" },
    ],
    company_logo: Teaching,
  },
  {
    id: 2,
    company_name: "Freelance",
    job: "Frontend developer",
    duration: "Jun, 2024 - Present",
    work_time: "Full-time",
    work_done: [
      { id: 1, description: "I also work on projects as a freelancer" },
      {
        id: 2,
        description:
          "I also gained a lot of knowledge and experience through freelancing",
      },
      {
        id: 3,
        description: `In some cases, I draw the "UI design" part for such custom projects myself, and the designs I draw are definitely satisfying the clients.`,
      },
    ],
    company_logo: Freelancer,
  },
  {
    id: 3,
    company_name: "EDUCOR",
    job: "Frontend developer",
    duration: "Aug, 2024 - 2024",
    work_time: "Part-time",
    work_done: [
      {
        id: 1,
        description:
          "I worked as a Front-end developer at Educor and gained some experience",
      },
      {
        id: 2,
        description:
          "In this company, I worked with technologies that I did not know before, and it was very useful for me",
      },
      {
        id: 3,
        description: "This company has helped me a lot to grow in programming",
      },
      {
        id: 4,
        description:
          "This start-up was very useful for me, we increased our knowledge by sharing experience in working with back-end.",
      },
    ],
    company_logo: Educore,
  },
];

export default experienceData;

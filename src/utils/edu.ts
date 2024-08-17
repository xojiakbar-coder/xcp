import { StaticImageData } from "next/image";
import WhiteLine from "../../public/assets/images/edu/whiteline.png";
import Webbrain from "../../public/assets/images/edu/webbrain.png";
import ISFT from "../../public/assets/images/edu/isft.jpg";

export interface EducationItemType {
  id: number;
  duration: string;
  name_place: string;
  course_name: string;
  about_course: string;
  image: StaticImageData;
}

const educationData: EducationItemType[] = [
  {
    id: 1,
    image: WhiteLine,
    duration: "2022-2023",
    name_place: "White Line",
    course_name: "Front-end course",
    about_course: `I took a frontend course at White Line Academy, where I learned how to work as a team on cross-projects, work on bugs, and communicate with the team in addition to the basics.`,
  },
  {
    id: 2,
    image: Webbrain,
    duration: "2023-2024",
    name_place: "Webbrain Academy",
    course_name: "JavaScript Bunker course",
    about_course: `Then I attended a course called JS Bunker at Webbrain Academy where I was able to take my JS knowledge to a very good level and we were busy solving more leetcode problems and then started building React.js from scratch. we also studied`,
  },
  {
    id: 3,
    image: ISFT,
    duration: "2023-2027",
    name_place: `International School of Finance Technology and Science University`,
    course_name: "Information technology system",
    about_course: `I was accepted as a student at ISFT University in 2023 and I am still studying there, they teach us mainly software engineering and hardware engineering, as well as specific sciences.`,
  },
];

export default educationData;

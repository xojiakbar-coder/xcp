import { StaticImageData } from "next/image";
import UdevsProject from "../../public/assets/images/projects/udevs.svg";
import AdminDashboardProject from "../../public/assets/images/projects/dashboard.png";

interface ProjectItemType {
  id: number;
  title: string;
  link: string;
  img: StaticImageData;
}

const projectsData: ProjectItemType[] = [
  {
    id: 1,
    title: "Admin Dashboard",
    img: AdminDashboardProject,
    link: "https://dash-com.netlify.app",
  },
  {
    id: 2,
    title: "Udevs clone",
    img: UdevsProject,
    link: "https://udevs-io.netlify.app",
  },
  {
    id: 3,
    title: "Github Finder",
    img: UdevsProject,
    link: "https://github-findder.netlify.app",
  },
  {
    id: 4,
    title: "Book shelf",
    img: UdevsProject,
    link: "https://library-project-reactjs.netlify.app/",
  },
  {
    id: 5,
    title: "Houzing",
    img: UdevsProject,
    link: "https://github.com/xojiakbar-coder/houzing",
  },
  {
    id: 6,
    title: "Registry Page with Google sheets",
    img: UdevsProject,
    link: "https://registry-page.netlify.app/",
  },
];

export default projectsData;

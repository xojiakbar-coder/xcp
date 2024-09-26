import { StaticImageData } from "next/image";
import UdevsProject from "../../public/assets/images/projects/udevs.svg";
import HouzingProject from "../../public/assets/images/projects/houzing.png";
import GithubFinderProject from "../../public/assets/images/projects/g-finder.png";
import AdminDashboardProject from "../../public/assets/images/projects/dashboard.png";
import UnityDashboardProject from "../../public/assets/images/projects/unity-dash.png";

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
    title: "Unity Dashboard",
    img: UnityDashboardProject,
    link: "https://unity-dashboard.netlify.app",
  },
  {
    id: 3,
    title: "Udevs clone",
    img: UdevsProject,
    link: "https://udevs-io.netlify.app",
  },
  {
    id: 4,
    title: "Github Finder",
    img: GithubFinderProject,
    link: "https://github-findder.netlify.app",
  },
  {
    id: 5,
    title: "Houzing",
    img: HouzingProject,
    link: "https://github.com/xojiakbar-coder/houzing",
  },
];

export default projectsData;

import HomePage from "@/pages/home/page";
import Projects from "@/pages/projects/page";
import Experience from "@/pages/experience/page";
import Education from "@/pages/edu/page";
import AboutPage from "@/pages/achievements/page";
import Technologies from "@/pages/tech/page";

interface PagesType {
  id: number;
  title: string;
  path: string;
  navbar?: boolean;
  element: React.FC;
}

const pagesData: PagesType[] = [
  {
    id: 2,
    title: "Home",
    path: "home",
    element: HomePage,
  },
  {
    id: 3,
    title: "Projects",
    path: "projects",
    navbar: true,
    element: Projects,
  },
  {
    id: 4,
    title: "Experience",
    path: "experience",
    navbar: true,
    element: Experience,
  },
  {
    id: 5,
    title: "Education",
    path: "education",
    navbar: true,
    element: Education,
  },
  {
    id: 6,
    title: "Personal Achievements",
    path: "achievements",
    element: AboutPage,
  },
  {
    id: 7,
    title: "Technologies",
    path: "technologies",
    navbar: true,
    element: Technologies,
  },
];

export default pagesData;

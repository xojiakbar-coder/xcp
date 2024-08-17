import { StaticImageData } from "next/image";
import reactIcon from "../../public/assets/icons/tech/react.svg";
import javascriptIcon from "../../public/assets/icons/tech/javascript.svg";
import typescriptIcon from "../../public/assets/icons/tech/typescript.svg";
import nextIcon from "../../public/assets/icons/tech/next.svg";
import htmlIcon from "../../public/assets/icons/tech/html.svg";
import cssIcon from "../../public/assets/icons/tech/css.svg";
import sassIcon from "../../public/assets/icons/tech/sass.svg";
import bootstrapIcon from "../../public/assets/icons/tech/bootstrap.svg";
import gitIcon from "../../public/assets/icons/tech/git.svg";
import npmIcon from "../../public/assets/icons/tech/npm.svg";
import prettierIcon from "../../public/assets/icons/tech/prettier.svg";
import figmaIcon from "../../public/assets/icons/tech/figma.svg";
import githubIcon from "../../public/assets/icons/tech/github.svg";

interface AchievementsItemType {
  id: number;
  title: string;
  tech_icon: StaticImageData;
}

const techData: AchievementsItemType[] = [
  {
    id: 1,
    tech_icon: reactIcon,
    title: "React",
  },
  {
    id: 2,
    tech_icon: javascriptIcon,
    title: "Javascript",
  },
  {
    id: 3,
    tech_icon: typescriptIcon,
    title: "Typescript",
  },
  {
    id: 4,
    tech_icon: nextIcon,
    title: "Next.js",
  },
  {
    id: 5,
    tech_icon: htmlIcon,
    title: "HTML",
  },
  {
    id: 6,
    tech_icon: cssIcon,
    title: "CSS",
  },
  {
    id: 7,
    tech_icon: sassIcon,
    title: "SASS",
  },
  {
    id: 8,
    tech_icon: bootstrapIcon,
    title: "Bootstrap",
  },
  {
    id: 9,
    tech_icon: gitIcon,
    title: "Git",
  },
  {
    id: 10,
    tech_icon: npmIcon,
    title: "npm",
  },
  {
    id: 11,
    tech_icon: prettierIcon,
    title: "Prettier",
  },
  {
    id: 12,
    tech_icon: figmaIcon,
    title: "Figma",
  },
  {
    id: 13,
    tech_icon: githubIcon,
    title: "Github",
  },
];

export default techData;

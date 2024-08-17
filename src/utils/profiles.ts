import leetcodeIcon from "../../public/assets/icons/leetcode.svg";
import githubIcon from "../../public/assets/icons/github.svg";
import telegramIcon from "../../public/assets/icons/telegram.svg";

interface ProfileOtemType {
  id: number;
  href: string;
  icon: string;
}

const profileData: ProfileOtemType[] = [
  {
    id: 1,
    icon: leetcodeIcon,
    href: "https://leetcode.com/u/xojiakbar_coder/",
  },
  {
    id: 2,
    icon: githubIcon,
    href: "https://github.com/xojiakbar-coder",
  },
  {
    id: 3,
    icon: telegramIcon,
    href: "https://t.me//xojiakbar_dev",
  },
];

export default profileData;

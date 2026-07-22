import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostman,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

const iconMap = {
  React: {
    icon: <FaReact />,
    color: "text-sky-400",
  },

  JavaScript: {
    icon: <SiJavascript />,
    color: "text-yellow-400",
  },

  "Tailwind CSS": {
    icon: <SiTailwindcss />,
    color: "text-cyan-400",
  },

  HTML5: {
    icon: <FaHtml5 />,
    color: "text-fuchsia-500",
  },

  CSS3: {
    icon: <FaCss3Alt />,
    color: "text-cyan-500",
  },

  "Node.js": {
    icon: <FaNodeJs />,
    color: "text-green-500",
  },

  "Express.js": {
    icon: <SiExpress />,
    color: "text-gray-300",
  },

  MongoDB: {
    icon: <SiMongodb />,
    color: "text-green-400",
  },

  MySQL: {
    icon: <SiMysql />,
    color: "text-cyan-400",
  },

  Git: {
    icon: <FaGitAlt />,
    color: "text-fuchsia-500",
  },

  GitHub: {
    icon: <FaGithub />,
    color: "text-white",
  },

  "VS Code": {
    icon: <VscVscode />,
    color: "text-cyan-400",
  },

  Postman: {
    icon: <SiPostman />,
    color: "text-fuchsia-400",
  },
};

const TechIcon = ({ name }) => {
  const tech = iconMap[name];

  if (!tech) {
    return (
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-lg">
        💻
      </div>
    );
  }

  return (
    <div
      className={`
        flex
        h-10
        w-10
        items-center
        justify-center
        rounded-xl
        border
        border-white/10
        bg-white/5
        text-xl
        backdrop-blur-md
        transition-all
        duration-300
        group-hover:scale-110
        group-hover:border-white/20
        group-hover:bg-white/10
        ${tech.color}
      `}
    >
      {tech.icon}
    </div>
  );
};

export default TechIcon;
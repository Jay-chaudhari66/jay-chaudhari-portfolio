import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiMongodb,
  SiJavascript,
  SiTailwindcss,
} from "react-icons/si";

import { motion } from "framer-motion";

const icons = [
  {
    icon: <FaReact />,
    color: "text-sky-400",
    top: "10%",
    left: "20%",
  },
  {
    icon: <FaNodeJs />,
    color: "text-green-500",
    top: "20%",
    right: "15%",
  },
  {
    icon: <SiMongodb />,
    color: "text-green-400",
    bottom: "20%",
    left: "18%",
  },
  {
    icon: <FaGitAlt />,
    color: "text-fuchsia-500",
    bottom: "10%",
    right: "20%",
  },
  {
    icon: <SiJavascript />,
    color: "text-yellow-400",
    top: "45%",
    left: "5%",
  },
  {
    icon: <SiTailwindcss />,
    color: "text-cyan-400",
    top: "60%",
    right: "5%",
  },
];

const HeroVisual = () => {
  return (
    <div className="relative hidden h-[550px] lg:flex items-center justify-center">

      {/* Center Circle */}
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 5,
        }}
        className="
          flex
          h-48
          w-48
          items-center
          justify-center
          rounded-full
          border
          border-cyan-500/20
          bg-white/5
          backdrop-blur-xl
          shadow-[0_0_60px_rgba(0,240,255,0.25)]
        "
      >
        <span className="text-7xl">👨‍💻</span>
      </motion.div>

      {/* Floating Icons */}
      {icons.map((item, index) => (
        <motion.div
          key={index}
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 3 + index,
            repeat: Infinity,
          }}
          style={{
            top: item.top,
            left: item.left,
            right: item.right,
            bottom: item.bottom,
          }}
          className={`
            absolute
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-2xl
            border
            border-white/10
            bg-white/5
            backdrop-blur-xl
            text-2xl
            ${item.color}
          `}
        >
          {item.icon}
        </motion.div>
      ))}
    </div>
  );
};

export default HeroVisual;
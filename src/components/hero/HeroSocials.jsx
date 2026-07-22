import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

import { portfolio } from "../../data/portfolio";

const HeroSocials = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
      className="mt-12 flex justify-center gap-8 text-2xl"
    >
      <a
        href={portfolio.social.github}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full p-3 text-gray-400 transition-all duration-300 hover:scale-110 hover:bg-white/10 hover:text-white"
      >
        <FaGithub />
      </a>

      <a
        href={portfolio.social.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full p-3 text-gray-400 transition-all duration-300 hover:scale-110 hover:bg-cyan-500/10 hover:text-cyan-400"
      >
        <FaLinkedin />
      </a>

      <a
        href={portfolio.social.email}
        className="rounded-full p-3 text-gray-400 transition-all duration-300 hover:scale-110 hover:bg-red-500/10 hover:text-red-400"
      >
        <FaEnvelope />
      </a>
    </motion.div>
  );
};

export default HeroSocials;
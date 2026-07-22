import { motion } from "framer-motion";
import {
  FaArrowUpRightFromSquare,
  FaGithub,
  FaLinkedin,
  FaFilePdf,
  FaEnvelope,
} from "react-icons/fa6";

const iconMap = {
  github: <FaGithub className="text-xl text-white" />,
  linkedin: <FaLinkedin className="text-xl text-white" />,
  resume: <FaFilePdf className="text-xl text-white" />,
  contact: <FaEnvelope className="text-xl text-white" />,
};

const bgMap = {
  github: "from-gray-700 to-gray-900",
  linkedin: "from-cyan-500 to-fuchsia-600",
  resume: "from-red-500 to-red-700",
  contact: "from-green-500 to-green-700",
};

const ActionCard = ({
  icon,
  title,
  description,
  buttonText,
  href,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -3 }}
      transition={{ duration: 0.25 }}
      className="
        mt-4
        overflow-hidden
        rounded-2xl
        border
        border-white/10
        bg-[#171C26]
        p-5
        shadow-lg
      "
    >
      {/* Top Section */}
      <div className="flex items-center gap-4">

        {/* Icon */}
        <div
          className={`
            flex
            h-14
            w-14
            shrink-0
            items-center
            justify-center
            rounded-2xl
            bg-gradient-to-br
            ${bgMap[icon] || "from-cyan-500 to-fuchsia-500"}
          `}
        >
          {iconMap[icon]}
        </div>

        {/* Text */}
        <div className="min-w-0 flex-1">
          <h3 className="text-xl font-semibold text-white">
            {title}
          </h3>

          <p className="mt-1 break-words text-sm text-slate-400">
            {description}
          </p>
        </div>

      </div>

      {/* Button */}
      {href && (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="
            mt-5
            flex
            w-full
            items-center
            justify-center
            gap-2
            rounded-xl
            bg-gradient-to-r
            from-cyan-500
            to-fuchsia-500
            px-5
            py-3
            font-semibold
            text-white
            transition-all
            duration-300
            hover:scale-[1.02]
            hover:shadow-lg
          "
        >
          <span>{buttonText}</span>

          <FaArrowUpRightFromSquare />
        </a>
      )}
    </motion.div>
  );
};

export default ActionCard;
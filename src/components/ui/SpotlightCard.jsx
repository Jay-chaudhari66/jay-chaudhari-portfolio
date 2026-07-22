import { motion } from "framer-motion";

const SpotlightCard = ({ children, className = "" }) => {
  return (
    <motion.div
      whileHover={{
        y: -4,
        scale: 1.01,
      }}
      transition={{
        duration: 0.2,
      }}
      className={`
        relative
        rounded-[28px]
        border
        border-cyan-500/10
        bg-white/[0.03]
        backdrop-blur-md
        transition-colors
        duration-300
        hover:border-cyan-400/30
        hover:shadow-[0_0_30px_rgba(0,240,255,0.08)]
        p-8
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
};

export default SpotlightCard;
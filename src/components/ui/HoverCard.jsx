import { motion } from "framer-motion";

const HoverCard = ({
  children,
  className = "",
}) => {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        duration: 0.3,
      }}
      className={`
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        p-8
        transition-all
        duration-300
        hover:border-cyan-400/30
        hover:shadow-[0_0_60px_rgba(0,240,255,.15)]
        ${className}
      `}
    >
      <div
        className="
          absolute
          inset-0
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
          bg-gradient-to-br
          from-cyan-500/5
          via-transparent
          to-fuchsia-500/5
        "
      />

      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

export default HoverCard;
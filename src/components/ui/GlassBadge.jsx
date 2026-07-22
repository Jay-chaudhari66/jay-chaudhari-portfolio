import { motion } from "framer-motion";

const GlassBadge = ({ text }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.03 }}
      className="
        inline-flex
        items-center
        gap-3
        rounded-full
        border
        border-white/10
        bg-white/5
        px-5
        py-2
        backdrop-blur-xl
        shadow-lg
      "
    >
      <span className="h-3 w-3 rounded-full bg-green-400 animate-pulse" />

      <span className="text-sm font-medium text-green-300">
        {text}
      </span>
    </motion.div>
  );
};

export default GlassBadge;
import { motion } from "framer-motion";

const HeroScroll = () => {
  return (
    <motion.div
      animate={{ y: [0, 10, 0] }}
      transition={{
        duration: 1.8,
        repeat: Infinity,
      }}
      className="mt-10 flex justify-center"
    >
      <div className="flex flex-col items-center">
        <div className="flex h-12 w-7 justify-center rounded-full border border-white/20">
          <div className="mt-2 h-3 w-1 rounded-full bg-white" />
        </div>

        <p className="mt-3 text-xs uppercase tracking-[0.3em] text-gray-500">
          Scroll
        </p>
      </div>
    </motion.div>
  );
};

export default HeroScroll;
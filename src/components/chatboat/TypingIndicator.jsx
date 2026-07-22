import { motion } from "framer-motion";
import { FaRobot } from "react-icons/fa6";

const TypingIndicator = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-end gap-3"
    >
      {/* AI Avatar */}
      <div
        className="
          relative
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-full
          bg-gradient-to-br
          from-cyan-500
          via-fuchsia-500
          to-cyan-300
          text-white
          shadow-lg
        "
      >
        <FaRobot size={18} />

        {/* Online Indicator */}
        <span
          className="
            absolute
            bottom-0
            right-0
            h-3
            w-3
            rounded-full
            border-2
            border-[#05050A]
            bg-green-400
          "
        />
      </div>

      {/* Bubble */}
      <div
        className="
          rounded-3xl
          rounded-bl-md
          border
          border-white/10
          bg-[#1A2233]
          px-5
          py-4
          shadow-lg
        "
      >
        <p className="mb-2 text-xs font-medium text-slate-400">
          Jay AI is typing...
        </p>

        <div className="flex gap-2">
          {[0, 1, 2].map((dot) => (
            <motion.span
              key={dot}
              animate={{
                y: [0, -6, 0],
                scale: [1, 1.25, 1],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                repeat: Infinity,
                duration: 0.9,
                delay: dot * 0.18,
              }}
              className="h-2.5 w-2.5 rounded-full bg-cyan-400"
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default TypingIndicator;
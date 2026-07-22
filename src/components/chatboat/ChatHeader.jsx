import { motion } from "framer-motion";
import { FaXmark } from "react-icons/fa6";

const ChatHeader = ({ onClose }) => {
  return (
    <div
      className="
        relative
        overflow-hidden
        border-b
        border-white/10
        bg-[#0D0D14]/90
        backdrop-blur-xl
        px-5
        py-4
      "
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-fuchsia-500/5 to-transparent pointer-events-none" />

      <div className="relative flex items-center justify-between">
        {/* Left */}
        <div className="flex items-center gap-4">
          {/* AI Logo */}
          <motion.div
            whileHover={{
              scale: 1.08,
              rotate: 8,
            }}
            transition={{ duration: 0.25 }}
            className="
              relative
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-2xl
              bg-gradient-to-br
              from-cyan-500
              via-cyan-500
              to-cyan-300
              text-lg
              font-bold
              text-white
              shadow-lg
            "
          >
            JC

            {/* Online Dot */}
            <motion.span
              animate={{
                scale: [1, 1.35, 1],
                opacity: [1, 0.5, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
              }}
              className="
                absolute
                -right-1
                -bottom-1
                h-3.5
                w-3.5
                rounded-full
                border-2
                border-[#0D0D14]
                bg-green-400
              "
            />
          </motion.div>

          {/* Text */}
          <div>
            <h2 className="text-lg font-semibold tracking-wide text-white">
              Jay AI Assistant
            </h2>

            <p className="mt-1 flex items-center gap-2 text-xs text-slate-400">
              <span className="h-2 w-2 rounded-full bg-green-400" />
              Online • Portfolio Assistant
            </p>
          </div>
        </div>

        {/* Close Button */}
        <motion.button
          whileHover={{
            rotate: 90,
            scale: 1.1,
          }}
          whileTap={{
            scale: 0.9,
          }}
          onClick={onClose}
          aria-label="Close chatbot"
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            text-slate-400
            transition-all
            duration-300
            hover:bg-red-500/15
            hover:text-red-400
          "
        >
          <FaXmark size={18} />
        </motion.button>
      </div>
    </div>
  );
};

export default ChatHeader;
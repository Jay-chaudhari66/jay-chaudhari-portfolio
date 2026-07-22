import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaRobot, FaTimes } from "react-icons/fa";

import ChatWindow from "./ChatWindow";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <ChatWindow
            onClose={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        whileHover={{
          scale: 1.1,
        }}
        whileTap={{
          scale: 0.9,
        }}
        onClick={() => setIsOpen(!isOpen)}
        className="
          fixed
          bottom-8
          right-8
          z-[1000]
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-full
          bg-gradient-to-r
          from-cyan-500
          to-fuchsia-500
          text-2xl
          text-white
          shadow-[0_10px_40px_rgba(0,240,255,0.4)]
        "
      >
        {isOpen ? <FaTimes /> : <FaRobot />}
      </motion.button>
    </>
  );
};

export default ChatBot;
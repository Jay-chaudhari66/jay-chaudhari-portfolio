import { motion } from "framer-motion";
import { FaRobot, FaUser } from "react-icons/fa6";

import ActionCard from "./ActionCard";

const ChatMessage = ({ sender, message }) => {
  const isBot = sender === "bot";

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className={`flex gap-3 ${
        isBot ? "justify-start" : "justify-end"
      }`}
    >
      {/* Avatar */}
      {isBot && (
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white shadow-lg">
          <FaRobot />
        </div>
      )}

      <div className="max-w-[78%]">

        {/* Normal Text */}
        {message.text && (
          <div
            className={`rounded-2xl px-5 py-3 whitespace-pre-line ${
              isBot
                ? "rounded-tl-md bg-[#1A2233] text-slate-200"
                : "rounded-tr-md bg-cyan-500 text-white"
            }`}
          >
            {message.text}
          </div>
        )}

        {/* Interactive Card */}
        {message.card && (
          <ActionCard
            icon={message.card.icon}
            title={message.card.title}
            description={message.card.description}
            buttonText={message.card.buttonText}
            href={message.card.href}
          />
        )}

        {/* Timestamp */}
        <p
          className={`mt-2 text-xs text-slate-500 ${
            isBot ? "text-left" : "text-right"
          }`}
        >
        {message.time &&
  new Date(message.time).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  })}
        </p>

      </div>

      {!isBot && (
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-white">
          <FaUser />
        </div>
      )}
    </motion.div>
  );
};

export default ChatMessage;
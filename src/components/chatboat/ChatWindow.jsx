import { useState } from "react";
import { motion } from "framer-motion";

import ChatHeader from "./ChatHeader";
import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";
import SuggestedQuestions from "./SuggestedQuestions";
import botResponses from "./botResponses";

const ChatWindow = ({ onClose }) => {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      message: {
        text: `👋 Welcome to Jay AI Assistant!

I'm your personal AI assistant for Jay Chaudhari's portfolio.

I can help you with:

💻 Skills & Technologies
🚀 Projects
🎓 Education
📄 Resume
💼 Internship Opportunities
📧 Contact Information

👇 Click one of the quick questions below or ask me anything!`,
        time: new Date(),
      },
    },
  ]);

  const [isTyping, setIsTyping] = useState(false);

  const sendMessage = (text) => {
    if (!text.trim()) return;

    // Add User Message
    const userMessage = {
      sender: "user",
      message: {
        text,
        time: new Date(),
      },
    };

    setMessages((prev) => [...prev, userMessage]);

    setIsTyping(true);

    // Simulate AI Thinking
    setTimeout(() => {
      const response = botResponses(text);

      const botMessage = {
        sender: "bot",
        message: {
          ...response,
          time: new Date(),
        },
      };

      setMessages((prev) => [...prev, botMessage]);

      setIsTyping(false);
    }, 1000);
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.9,
        y: 25,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        scale: 0.9,
        y: 25,
      }}
      transition={{
        duration: 0.25,
      }}
      className="
        fixed
        bottom-24
        right-6
        z-[999]
        flex
        h-[650px]
        w-[390px]
        flex-col
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-[#05050A]/95
        shadow-[0_20px_80px_rgba(0,0,0,0.45)]
        backdrop-blur-xl

        max-md:left-3
        max-md:right-3
        max-md:bottom-20
        max-md:h-[75vh]
        max-md:w-auto
      "
    >
      {/* Header */}
      <ChatHeader onClose={onClose} />

      {/* Chat Messages */}
      <ChatMessages
        messages={messages}
        isTyping={isTyping}
      />

      {/* Quick Questions */}
      {messages.length === 1 && (
        <SuggestedQuestions onSelect={sendMessage} />
      )}

      {/* Chat Input */}
      <ChatInput onSend={sendMessage} />
    </motion.div>
  );
};

export default ChatWindow;
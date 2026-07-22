import { useEffect, useRef } from "react";

import ChatMessage from "./ChatMessage";
import TypingIndicator from "./TypingIndicator";

const ChatMessages = ({
  messages,
  isTyping,
}) => {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, isTyping]);

  return (
    <div
      className="
        flex-1
        overflow-y-auto
        bg-[#05050A]
        px-5
        py-5
      "
    >
      <div className="space-y-5">

        {messages.map((message, index) => (
          <ChatMessage
            key={index}
            sender={message.sender}
            message={message.message}
          />
        ))}

        {/* Typing Animation */}
        {isTyping && <TypingIndicator />}

        {/* Auto Scroll */}
        <div ref={bottomRef} />

      </div>
    </div>
  );
};

export default ChatMessages;
import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa6";

const ChatInput = ({ onSend }) => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    const text = message.trim();

    if (!text) return;

    onSend(text);
    setMessage("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="border-t border-white/10 bg-[#0D0D14] p-4">
      <div className="flex items-center gap-3 rounded-full border border-white/10 bg-[#05050A] px-4 py-2">

        <input
          type="text"
          value={message}
          placeholder="Ask Jay AI anything..."
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          className="
            flex-1
            bg-transparent
            text-white
            placeholder:text-slate-500
            outline-none
          "
        />

        <button
          onClick={handleSend}
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            bg-cyan-500
            text-white
            transition-all
            duration-300
            hover:scale-110
            hover:bg-cyan-600
          "
        >
          <FaPaperPlane size={14} />
        </button>

      </div>
    </div>
  );
};

export default ChatInput;
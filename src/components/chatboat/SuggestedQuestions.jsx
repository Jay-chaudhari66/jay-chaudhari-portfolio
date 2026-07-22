import { motion } from "framer-motion";

const questions = [
  "Tell me about yourself",
  "What are your skills?",
  "Show me your projects",
  "Education",
  "Download Resume",
  "Contact Information",
  "Are you available for internships?",
];

const SuggestedQuestions = ({ onSelect }) => {
  return (
    <div className="border-t border-white/10 px-4 py-3">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
        💡 Quick Questions
      </p>

      <div className="flex flex-wrap gap-2">
        {questions.map((question) => (
          <motion.button
            key={question}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onSelect(question)}
            className="
              rounded-full
              border
              border-cyan-500/20
              bg-cyan-500/10
              px-4
              py-2
              text-sm
              text-cyan-300
              transition-all
              duration-300
              hover:border-cyan-400
              hover:bg-cyan-500/20
            "
          >
            {question}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default SuggestedQuestions;
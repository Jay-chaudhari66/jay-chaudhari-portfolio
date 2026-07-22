import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const AnimatedRole = ({ roles = [] }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (roles.length === 0) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2500);

    return () => clearInterval(timer);
  }, [roles]);

  if (roles.length === 0) {
    return null;
  }

  return (
    <div className="mt-6 h-12 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.h2
          key={roles[index]}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.35 }}
          className="text-2xl font-medium text-cyan-400 md:text-4xl"
        >
          {roles[index]}
        </motion.h2>
      </AnimatePresence>
    </div>
  );
};

export default AnimatedRole;
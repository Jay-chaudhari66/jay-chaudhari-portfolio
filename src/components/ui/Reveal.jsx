import { motion } from "framer-motion";

const Reveal = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        margin: "-80px",
      }}
      transition={{
        duration: 0.45,
        delay,
        ease: "easeOut",
      }}
      style={{
        willChange: "transform, opacity",
      }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
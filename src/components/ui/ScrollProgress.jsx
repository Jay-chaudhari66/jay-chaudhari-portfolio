import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="
        fixed
        top-0
        left-0
        right-0
        z-[9999]
        h-1
        origin-left
        bg-gradient-to-r
        from-cyan-500
        via-cyan-400
        to-sky-300
      "
    />
  );
};

export default ScrollProgress;
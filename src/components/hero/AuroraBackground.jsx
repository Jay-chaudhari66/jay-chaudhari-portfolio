import { motion } from "framer-motion";

const auroraLayers = [
  {
    className:
      "top-[-20%] left-[-10%] w-[700px] h-[700px] bg-cyan-500/20",
    duration: 18,
  },
  {
    className:
      "top-[20%] right-[-15%] w-[650px] h-[650px] bg-fuchsia-500/20",
    duration: 22,
  },
  {
    className:
      "bottom-[-25%] left-[25%] w-[600px] h-[600px] bg-cyan-400/20",
    duration: 20,
  },
];

const AuroraBackground = () => {
  return (
    <>
      {auroraLayers.map((layer, index) => (
        <motion.div
          key={index}
          className={`absolute rounded-full blur-[140px] ${layer.className}`}
          animate={{
            x: [0, 50, -30, 0],
            y: [0, -40, 30, 0],
            scale: [1, 1.08, 0.96, 1],
          }}
          transition={{
            duration: layer.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </>
  );
};

export default AuroraBackground;
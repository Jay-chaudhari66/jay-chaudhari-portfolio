import { motion } from "framer-motion";

import { portfolio } from "../../data/portfolio";
import Typography from "../ui/Typography";
import GradientText from "../ui/GradientText";
import AnimatedRole from "../ui/AnimatedRole";

import HeroButtons from "./HeroButtons";
import HeroSocials from "./HeroSocials";

const HeroContent = () => {
  const { hero } = portfolio;

  return (
    <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
      {/* Greeting */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.15 }}
        className="text-xs font-semibold uppercase tracking-[0.4em] text-cyan-400"
      >
        Hello, I'm
      </motion.p>

      {/* Name */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.7,
        }}
      >
        <Typography
          as="h1"
          variant="hero"
          className="glitch mt-2 leading-none"
          data-text={hero.name}
        >
          <GradientText>{hero.name}</GradientText>
        </Typography>
      </motion.div>

      {/* Animated Role */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.55 }}
        className="mt-2"
      >
        <AnimatedRole roles={hero.roles} />
      </motion.div>

      {/* Divider */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: 80 }}
        transition={{
          delay: 0.8,
          duration: 0.5,
        }}
        className="my-5 h-[2px] rounded-full bg-gradient-to-r from-cyan-500 via-cyan-400 to-sky-300"
      />

      {/* Description */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.95 }}
      >
        <Typography
          variant="body"
          className="mx-auto max-w-3xl text-base leading-8 text-slate-300"
        >
          {hero.description}
        </Typography>
      </motion.div>

      {/* Button */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.15 }}
        className="mt-8"
      >
        <HeroButtons />
      </motion.div>

      {/* Social Icons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.35 }}
        className="mt-5"
      >
        <HeroSocials />
      </motion.div>
    </div>
  );
};

export default HeroContent;
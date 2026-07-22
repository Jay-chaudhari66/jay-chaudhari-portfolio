import { motion } from "framer-motion";
import TechIcon from "./TechIcon";

const SkillBar = ({ name, level }) => {
  return (
    <div className="group">
      {/* Top */}
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="transition duration-300 group-hover:scale-110 group-hover:rotate-6">
            <TechIcon name={name} />
          </div>

          <span className="font-medium tracking-wide text-white">
            {name}
          </span>
        </div>

        <span className="text-sm font-semibold text-slate-400">
          {level}%
        </span>
      </div>

      {/* Progress Background */}
      <div className="relative h-2 overflow-hidden rounded-full bg-white/10">
        {/* Animated Fill */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
          }}
          className="
            h-full
            rounded-full
            bg-gradient-to-r
            from-cyan-500
            via-cyan-400
            to-sky-300
          "
        />

        {/* Shine Effect */}
        <motion.div
          initial={{ x: "-100%" }}
          whileInView={{ x: "220%" }}
          viewport={{ once: true }}
          transition={{
            duration: 1.8,
            delay: 0.6,
          }}
          className="
            absolute
            top-0
            left-0
            h-full
            w-8
            bg-white/30
            blur-sm
          "
        />
      </div>
    </div>
  );
};

export default SkillBar;
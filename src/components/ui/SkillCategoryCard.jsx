import SpotlightCard from "./SpotlightCard";
import Reveal from "./Reveal";
import SkillBar from "./SkillBar";
import Typography from "./Typography";

const colorClasses = {
  blue: {
    border: "border-cyan-500/30",
    dot: "bg-cyan-400 shadow-[0_0_8px_#22d3ee]",
    glow: "shadow-cyan-500/20",
  },

  green: {
    border: "border-emerald-500/30",
    dot: "bg-emerald-400 shadow-[0_0_8px_#34d399]",
    glow: "shadow-emerald-500/20",
  },

  emerald: {
    border: "border-emerald-500/30",
    dot: "bg-emerald-400 shadow-[0_0_8px_#34d399]",
    glow: "shadow-emerald-500/20",
  },

  fuchsia: {
    border: "border-fuchsia-500/30",
    dot: "bg-fuchsia-400 shadow-[0_0_8px_#e879f9]",
    glow: "shadow-fuchsia-500/20",
  },
};

const SkillCategoryCard = ({
  title,
  description,
  color = "blue",
  skills,
  delay = 0,
}) => {
  const theme = colorClasses[color] || colorClasses.blue;

  return (
    <Reveal delay={delay}>
      <SpotlightCard
        className={`
          group
          flex
          h-full
          flex-col
          rounded-3xl
          p-8
          transition-all
          duration-500
          ${theme.border}
          ${theme.glow}
          hover:-translate-y-1
          hover:shadow-2xl
        `}
      >
        {/* Header */}
        <div className="mb-8">
          <div className="mb-4 flex items-center gap-3">
            <span
              className={`
                h-3
                w-3
                rounded-full
                transition-transform
                duration-300
                group-hover:scale-125
                ${theme.dot}
              `}
            />

            <Typography
              as="h3"
              variant="h3"
              className="text-white"
            >
              {title}
            </Typography>
          </div>

          <Typography
            variant="small"
            className="leading-6 text-slate-400"
          >
            {description}
          </Typography>
        </div>

        {/* Skills */}
        <div className="space-y-6">
          {skills.map((skill) => (
            <SkillBar
              key={skill.name}
              name={skill.name}
              level={skill.level}
            />
          ))}
        </div>
      </SpotlightCard>
    </Reveal>
  );
};

export default SkillCategoryCard;
import SpotlightCard from "./SpotlightCard";
import SkillBar from "./SkillBar";
import Reveal from "./Reveal";

const SkillCard = ({ title, skills, delay = 0 }) => {
  return (
    <Reveal delay={delay}>
      <SpotlightCard className="h-full p-8">
        <h3 className="mb-8 text-2xl font-bold text-white">
          {title}
        </h3>

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

export default SkillCard;
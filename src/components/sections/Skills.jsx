import Container from "../ui/Container";
import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";
import SkillCategoryCard from "../ui/SkillCategoryCard";

import { portfolio } from "../../data/portfolio";

const Skills = () => {
  const { skills } = portfolio;

  return (
    <Section id="skills">
      <Container>
        <SectionTitle
          badge="MY TECH STACK"
          title={skills.title}
          subtitle={skills.subtitle}
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {skills.categories.map((category, index) => (
            <SkillCategoryCard
              key={category.title}
              {...category}
              delay={index * 0.15}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Skills;
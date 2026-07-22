import Container from "../ui/Container";
import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";
import Timeline from "../ui/Timeline";

import { portfolio } from "../../data/portfolio";

const Experience = () => {
  const { experience } = portfolio;

  return (
    <Section id="experience">
      <Container>
        <SectionTitle
          badge="EXPERIENCE"
          title={experience.title}
          subtitle={experience.subtitle}
        />

        <Timeline items={experience.timeline} />
      </Container>
    </Section>
  );
};

export default Experience;
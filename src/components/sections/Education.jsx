import Container from "../ui/Container";
import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";
import Timeline from "../ui/Timeline";

import { portfolio } from "../../data/portfolio";

const Education = () => {
  const { education } = portfolio;

  return (
    <Section id="education">
      <Container>
        <SectionTitle
          badge="EDUCATION"
          title={education.title}
          subtitle={education.subtitle}
        />

        <Timeline items={education.timeline} />
      </Container>
    </Section>
  );
};

export default Education;
import Container from "../ui/Container";
import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";
import ProjectCard from "../ui/ProjectCard";

import { portfolio } from "../../data/portfolio";

const Projects = () => {
  const { projects } = portfolio;

  return (
    <Section id="projects">
      <Container>
        <SectionTitle
          badge="FEATURED PROJECTS"
          title={projects.title}
          subtitle={projects.subtitle}
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {projects.items.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Projects;
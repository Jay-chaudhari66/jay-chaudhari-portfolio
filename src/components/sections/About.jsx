import {
  FaBriefcase,
  FaGraduationCap,
  FaCode,
  FaLocationDot,
} from "react-icons/fa6";

import Container from "../ui/Container";
import GlassPanel from "../ui/GlassPanel";
import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";

import { portfolio } from "../../data/portfolio";

const icons = [
  <FaBriefcase className="mb-6 text-4xl text-cyan-400" />,
  <FaGraduationCap className="mb-6 text-4xl text-fuchsia-400" />,
  <FaCode className="mb-6 text-4xl text-cyan-400" />,
  <FaLocationDot className="mb-6 text-4xl text-emerald-400" />,
];

const About = () => {
  const { about } = portfolio;

  return (
    <Section id="about">
      <Container>
        <SectionTitle
          title={about.title}
          subtitle={about.subtitle}
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-6 lg:auto-rows-[220px]">

          {/* About */}
          <GlassPanel className="flex flex-col justify-center p-10 lg:col-span-4 lg:row-span-2">
            <h3 className="mb-6 text-4xl font-bold text-white">
              {about.title}
            </h3>

            <p className="max-w-3xl text-lg leading-9 text-slate-400">
              {about.intro}
            </p>
          </GlassPanel>

          {/* Dynamic Cards */}
          {about.cards.map((card, index) => (
            <GlassPanel
              key={card.title}
              className="p-8 lg:col-span-2"
            >
              {icons[index]}

              <p className="mb-3 text-xs uppercase tracking-[0.35em] text-slate-400">
                {card.title}
              </p>

              <h3 className="text-5xl font-bold text-white">
                {card.value}
              </h3>

              <p className="mt-4 text-lg text-slate-400">
                {card.description}
              </p>
            </GlassPanel>
          ))}

          {/* Tech Stack */}
          <GlassPanel className="p-8 lg:col-span-2 lg:row-span-2">
            <h3 className="mb-8 text-3xl font-bold text-white">
              Tech Stack
            </h3>

            <div className="flex flex-wrap gap-3">
              {about.skills.map((skill) => (
                <span
                  key={skill}
                  className="
                    rounded-full
                    border
                    border-cyan-500/20
                    bg-cyan-500/10
                    px-4
                    py-2
                    text-sm
                    font-medium
                    text-cyan-300
                    transition-all
                    duration-300
                    hover:scale-105
                    hover:border-cyan-400
                    hover:bg-cyan-500/20
                  "
                >
                  {skill}
                </span>
              ))}
            </div>
          </GlassPanel>

          {/* Current Focus */}
          <GlassPanel className="flex flex-col justify-center p-10 lg:col-span-4">
            <h3 className="mb-6 text-4xl font-bold text-white">
              Current Focus
            </h3>

            <p className="text-lg leading-9 text-slate-400">
              {about.focus}
            </p>
          </GlassPanel>

        </div>
      </Container>
    </Section>
  );
};

export default About;
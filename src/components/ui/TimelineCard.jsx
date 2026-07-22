import { HiCalendar, HiLocationMarker } from "react-icons/hi";

import SpotlightCard from "./SpotlightCard";
import Reveal from "./Reveal";
import Typography from "./Typography";

const TimelineCard = ({
  year,
  title,
  company,
  location,
  description,
  technologies = [],
  delay = 0,
}) => {
  return (
    <Reveal delay={delay}>
      <div className="relative pl-16">

        {/* Timeline Dot */}
        <div className="absolute left-0 top-10 z-20 flex h-7 w-7 items-center justify-center rounded-full border-4 border-[#05050A] bg-cyan-500 shadow-[0_0_20px_rgba(0,240,255,0.6)]">
          <div className="h-2.5 w-2.5 rounded-full bg-white" />
        </div>

        <SpotlightCard className="rounded-3xl p-8">

          {/* Header */}
          <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">

            <div>
              <Typography
                as="h3"
                variant="h3"
                className="mb-2 text-white"
              >
                {title}
              </Typography>

              <Typography className="font-medium text-cyan-400">
                {company}
              </Typography>

              {location && (
                <div className="mt-2 flex items-center gap-2 text-sm text-slate-500">
                  <HiLocationMarker />
                  {location}
                </div>
              )}
            </div>

            {/* Year Badge */}
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-300">
              <HiCalendar />
              {year}
            </div>
          </div>

          {/* Divider */}
          <div className="mb-6 h-px bg-white/10" />

          {/* Description */}
          <Typography
            variant="body"
            className="leading-8 text-slate-300"
          >
            {description}
          </Typography>

          {/* Technologies */}
          {technologies.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-3">
              {technologies.map((tech) => (
                <span
                  key={tech}
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
                  "
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

        </SpotlightCard>
      </div>
    </Reveal>
  );
};

export default TimelineCard;
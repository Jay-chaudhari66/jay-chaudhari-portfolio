import {
  FaGithub,
  FaArrowRight,
  FaStar,
  FaFolderOpen,
} from "react-icons/fa";
import { HiCheck } from "react-icons/hi";

import SpotlightCard from "./SpotlightCard";
import Typography from "./Typography";
import Button from "./Button";

const ProjectCard = ({ project }) => {
  return (
    <SpotlightCard className="flex h-full min-h-[620px] flex-col p-8">

      {/* Badge Area - Fixed Height */}
      <div className="mb-6 h-10">
        <div className="inline-flex items-center gap-2 rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-300">
          {project.featured ? (
            <>
              <FaStar className="text-yellow-400" />
              Featured Project
            </>
          ) : (
            <>
              <FaFolderOpen />
              Personal Project
            </>
          )}
        </div>
      </div>

      {/* Title - Fixed Height */}
      <div className="mb-5 min-h-[90px]">
        <Typography
          as="h3"
          variant="h3"
          className="leading-tight text-white"
        >
          {project.title}
        </Typography>
      </div>

      {/* Description - Fixed Height */}
      <div className="mb-6 min-h-[110px]">
        <Typography
          variant="body"
          className="leading-7 text-slate-400"
        >
          {project.description}
        </Typography>
      </div>

      {/* Technologies - Fixed Height */}
      <div className="mb-8 min-h-[80px]">
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="
                rounded-full
                border
                border-cyan-500/20
                bg-cyan-500/10
                px-3
                py-1.5
                text-xs
                font-medium
                text-cyan-300
              "
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Features - Fixed Height */}
      <div className="mb-8 min-h-[120px]">
        <div className="grid grid-cols-2 gap-3">
          {project.features.map((feature) => (
            <div
              key={feature}
              className="flex items-center gap-2 text-sm text-slate-300"
            >
              <HiCheck className="text-green-400" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Button */}
      <div className="mt-auto">
        <Button
          href={project.github}
          fullWidth
          leftIcon={<FaGithub />}
          rightIcon={<FaArrowRight size={12} />}
        >
          View Repository
        </Button>
      </div>
    </SpotlightCard>
  );
};

export default ProjectCard;
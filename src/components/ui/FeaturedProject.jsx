import {
  FaGithub,
  FaCheckCircle,
  FaStar,
} from "react-icons/fa";

import SpotlightCard from "./SpotlightCard";
import Typography from "./Typography";
import Button from "./Button";

const FeaturedProject = ({ project }) => {
  return (
    <SpotlightCard className="overflow-hidden p-0">
      <div className="p-10 lg:p-12">

        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-300">
          <FaStar className="text-yellow-400" />
          Featured Project
        </div>

        {/* Title */}
        <Typography
          as="h3"
          variant="h1"
          className="mb-5 leading-tight text-white"
        >
          {project.title}
        </Typography>

        {/* Description */}
        <Typography
          variant="body"
          className="max-w-4xl leading-8 text-slate-400"
        >
          {project.description}
        </Typography>

        {/* Divider */}
        <div className="my-10 h-px bg-white/10" />

        {/* Features + Technologies */}
        <div className="grid gap-10 lg:grid-cols-2">

          {/* Features */}
          <div>
            <h4 className="mb-5 text-xl font-semibold text-white">
              Key Features
            </h4>

            <div className="space-y-4">
              {project.features.slice(0, 6).map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3"
                >
                  <FaCheckCircle className="text-green-400" />

                  <span className="text-slate-300">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="mb-5 text-xl font-semibold text-white">
              Technologies Used
            </h4>

            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech) => (
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
                    transition
                    duration-300
                    hover:scale-105
                    hover:border-cyan-400
                  "
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Buttons */}
        <div className="mt-12 flex flex-wrap gap-5">

          <Button
            href={project.github}
            leftIcon={<FaGithub />}
          >
            View GitHub Repository
          </Button>

          {project.demo && (
            <Button
              href={project.demo}
              variant="secondary"
            >
              Live Demo
            </Button>
          )}

        </div>

      </div>
    </SpotlightCard>
  );
};

export default FeaturedProject;
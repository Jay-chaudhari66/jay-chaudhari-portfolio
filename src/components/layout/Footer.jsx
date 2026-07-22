import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaArrowUp,
} from "react-icons/fa6";

import { portfolio } from "../../data/portfolio";

const Footer = () => {
  const { hero, social } = portfolio;

  const techStack = [
    "React",
    "Tailwind CSS",
    "Framer Motion",
    "Vite",
  ];

  return (
    <footer className="relative mt-32 overflow-hidden border-t border-white/10 bg-[#05050A]">
      {/* Top Gradient */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 py-20">
        {/* Heading */}
        <div className="text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
            Let's Build Something Amazing Together
          </p>

          <h2 className="font-[Chakra_Petch] text-5xl font-bold">
            <span className="bg-gradient-to-r from-cyan-400 via-cyan-300 to-fuchsia-400 bg-clip-text text-transparent">
              {hero.name}
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            Passionate MERN Stack Developer focused on building
            modern, responsive, and scalable web applications
            using React, Node.js, Express.js, and MongoDB.
          </p>
        </div>

        {/* Social Icons */}
        <div className="mt-12 flex justify-center gap-5">
          <a
            href={social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5 text-2xl text-slate-300 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500 hover:text-cyan-400"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href={social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5 text-2xl text-slate-300 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500 hover:text-cyan-400"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
            href={social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5 text-2xl text-slate-300 transition-all duration-300 hover:-translate-y-2 hover:border-pink-500 hover:text-pink-400"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </div>

        {/* Navigation */}
        <div className="mt-14 flex flex-wrap justify-center gap-8 text-slate-400">
          <a href="#about" className="transition hover:text-cyan-400">
            About
          </a>

          <a href="#skills" className="transition hover:text-cyan-400">
            Skills
          </a>

          <a href="#projects" className="transition hover:text-cyan-400">
            Projects
          </a>

          <a href="#experience" className="transition hover:text-cyan-400">
            Journey
          </a>

          <a href="#education" className="transition hover:text-cyan-400">
            Education
          </a>

          <a href="#contact" className="transition hover:text-cyan-400">
            Contact
          </a>
        </div>

        {/* Divider */}
        <div className="my-14 border-t border-white/10" />

        {/* Bottom */}
        <div className="flex flex-col items-center text-center">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} {hero.name}. All Rights Reserved.
          </p>

          <p className="mt-3 text-sm text-slate-400">
            Designed & Developed by{" "}
            <span className="font-semibold text-white">
              Jay Chaudhari
            </span>
          </p>

          {/* Tech Stack */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="
                  rounded-full
                  border
                  border-white/10
                  bg-white/5
                  px-4
                  py-2
                  text-sm
                  text-slate-300
                  transition-all
                  duration-300
                  hover:border-cyan-500
                  hover:text-cyan-400
                "
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Back To Top */}
          <a
            href="#home"
            aria-label="Back to Top"
            className="
              group
              mt-10
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-white/5
              text-white
              transition-all
              duration-300
              hover:-translate-y-2
              hover:border-cyan-500
              hover:bg-cyan-500
            "
          >
            <FaArrowUp className="transition-transform duration-300 group-hover:-translate-y-1" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
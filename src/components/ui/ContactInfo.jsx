import {
  FaEnvelope,
  FaPhone,
  FaLocationDot,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa6";

import SpotlightCard from "./SpotlightCard";
import Button from "./Button";
import Typography from "./Typography";

import { portfolio } from "../../data/portfolio";

const ContactInfo = () => {
  const { contact, social } = portfolio;

  return (
    <SpotlightCard className="p-8">
      {/* Heading */}
      <Typography
        as="h3"
        variant="h3"
        className="mb-6 text-white"
      >
        Contact Information
      </Typography>

      {/* Contact Details */}
      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10">
            <FaEnvelope className="text-xl text-cyan-400" />
          </div>

          <div>
            <p className="text-sm text-slate-400">Email</p>

            <a
              href={`mailto:${contact.email}`}
              className="text-lg font-medium text-white transition hover:text-cyan-400"
            >
              {contact.email}
            </a>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/10">
            <FaPhone className="text-xl text-green-400" />
          </div>

          <div>
            <p className="text-sm text-slate-400">Phone</p>

            <a
              href={`tel:${contact.phone}`}
              className="text-lg font-medium text-white transition hover:text-green-400"
            >
              {contact.phone}
            </a>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10">
            <FaLocationDot className="text-xl text-red-400" />
          </div>

          <div>
            <p className="text-sm text-slate-400">Location</p>

            <p className="text-lg font-medium text-white">
              {contact.location}
            </p>
          </div>
        </div>
      </div>

      {/* Socials */}
      <div className="mt-8">
        <Typography
          variant="small"
          className="mb-4 uppercase tracking-[0.3em]"
        >
          Follow Me
        </Typography>

        <div className="flex gap-4">
          <a
            href={social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xl text-white transition-all duration-300 hover:scale-110 hover:border-cyan-500 hover:text-cyan-400"
          >
            <FaGithub />
          </a>

          <a
            href={social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xl text-white transition-all duration-300 hover:scale-110 hover:border-cyan-500 hover:text-cyan-400"
          >
            <FaLinkedin />
          </a>

          <a
            href={social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xl text-white transition-all duration-300 hover:scale-110 hover:border-pink-500 hover:text-pink-400"
          >
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Resume Button */}
      <div className="mt-8">
        <Button href={contact.resume} fullWidth>
          Download Resume
        </Button>
      </div>
    </SpotlightCard>
  );
};

export default ContactInfo;
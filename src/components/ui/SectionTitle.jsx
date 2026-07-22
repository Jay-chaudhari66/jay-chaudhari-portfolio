import Typography from "./Typography";
import GlassBadge from "./GlassBadge";
import Reveal from "./Reveal";

const SectionTitle = ({
  badge,
  title,
  subtitle,
  align = "center",
  className = "",
}) => {
  const alignment =
    align === "center"
      ? "items-center text-center"
      : "items-start text-left";

  return (
    <Reveal>
      <div
        className={`
          mb-20
          flex
          flex-col
          ${alignment}
          ${className}
        `}
      >
        {badge && (
          <div className="mb-5">
            <GlassBadge text={badge} />
          </div>
        )}

        <Typography
          as="h2"
          variant="h1"
          className="
            max-w-4xl
            text-white
            tracking-tight
          "
        >
          {title}
        </Typography>

        {subtitle && (
          <Typography
            variant="body"
            className="
              mt-6
              max-w-2xl
              leading-8
              text-slate-400
            "
          >
            {subtitle}
          </Typography>
        )}
      </div>
    </Reveal>
  );
};

export default SectionTitle;
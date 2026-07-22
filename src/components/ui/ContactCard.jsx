import SpotlightCard from "./SpotlightCard";
import Typography from "./Typography";

const ContactCard = ({
  icon,
  title,
  value,
  href,
}) => {
  const content = (
    <SpotlightCard className="h-full p-6">
      <div className="mb-4 text-4xl">
        {icon}
      </div>

      <Typography
        as="h3"
        variant="h3"
        className="mb-2 text-white"
      >
        {title}
      </Typography>

      <Typography variant="body">
        {value}
      </Typography>
    </SpotlightCard>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {content}
      </a>
    );
  }

  return content;
};

export default ContactCard;
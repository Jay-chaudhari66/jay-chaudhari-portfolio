// Wrap any heading text to get the cyberpunk RGB-split glitch effect on hover.
// Usage: <GlitchText as="h1" text="Jay Chaudhari" className="text-6xl font-bold" />
const GlitchText = ({ text, as: Tag = "span", className = "" }) => {
  return (
    <Tag className={`glitch ${className}`} data-text={text}>
      {text}
    </Tag>
  );
};

export default GlitchText;

const typographyVariants = {
hero: `
  text-5xl
  md:text-6xl
  lg:text-7xl
  xl:text-8xl
  font-bold
  tracking-tight
  leading-none
`,

  h1: `
    text-4xl
    md:text-5xl
    lg:text-6xl
    font-bold
    tracking-tight
    leading-tight
  `,

  h2: `
    text-3xl
    md:text-4xl
    lg:text-5xl
    font-semibold
    tracking-tight
  `,

  h3: `
    text-2xl
    md:text-3xl
    font-semibold
  `,

  body: `
    text-base
    md:text-lg
    leading-8
    text-slate-400
  `,

  small: `
    text-sm
    text-slate-500
  `,

  caption: `
    text-xs
    uppercase
    tracking-[0.35em]
    text-cyan-400
    font-semibold
  `,
};

const headingVariants = ["hero", "h1", "h2", "h3"];

const Typography = ({
  as: Component = "p",
  variant = "body",
  className = "",
  children,
  ...rest
}) => {
  const fontClass = headingVariants.includes(variant)
    ? "font-[Chakra_Petch]"
    : "font-[Inter]";

  return (
    <Component
      className={`
        ${fontClass}
        ${typographyVariants[variant] || typographyVariants.body}
        ${className}
      `}
      {...rest}
    >
      {children}
    </Component>
  );
};

export default Typography;

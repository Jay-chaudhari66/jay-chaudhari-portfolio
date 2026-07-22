const Section = ({
  id,
  children,
  className = "",
}) => {
  return (
    <section
      id={id}
      className={`
        relative
        py-24
        md:py-32
        ${className}
      `}
    >
      {children}
    </section>
  );
};

export default Section;
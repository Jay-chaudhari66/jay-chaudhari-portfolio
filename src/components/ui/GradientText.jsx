const GradientText = ({ children, className = "" }) => {
  return (
    <span
      className={`
        bg-gradient-to-r
        from-white
        via-cyan-200
        to-cyan-500
        bg-clip-text
        text-transparent
        ${className}
      `}
    >
      {children}
    </span>
  );
};

export default GradientText;
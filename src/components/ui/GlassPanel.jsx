const GlassPanel = ({
  children,
  className = "",
}) => {
  return (
    <div
      className={`
        rounded-3xl
        border
        border-cyan-500/10
        bg-white/[0.03]
        backdrop-blur-xl
        shadow-xl
        transition-colors
        duration-300
        hover:border-cyan-400/25
        p-8
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default GlassPanel;
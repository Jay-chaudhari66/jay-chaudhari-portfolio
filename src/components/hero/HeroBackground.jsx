import ParticleField from "./ParticleField";

const HeroBackground = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Base Background */}
      <div className="absolute inset-0 bg-[#05050A]" />

      {/* Drifting neon particles + wireframe shapes */}
      <ParticleField />

      {/* Radial Fade */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#05050A_85%)]" />
    </div>
  );
};

export default HeroBackground;
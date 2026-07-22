import Container from "../ui/Container";
import GlassBadge from "../ui/GlassBadge";

import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroVisual from "./HeroVisual";

import { portfolio } from "../../data/portfolio";

const Hero = () => {
  const { hero } = portfolio;

  return (
    <section
      id="home"
      className="relative overflow-hidden pt-32 lg:pt-36"
    >
      <HeroBackground />

      <Container>
        {/* Center Badge */}
        <div className="mb-10 flex justify-center">
          <GlassBadge text={hero.status} />
        </div>

        {/* Hero Section */}
        <div
          className="
            grid
            min-h-[82vh]
            items-center
            gap-10
            lg:grid-cols-2
            lg:gap-12
          "
        >
          <HeroContent />
          <HeroVisual />
        </div>
      </Container>
    </section>
  );
};

export default Hero;
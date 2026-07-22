import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

import Button from "../ui/Button";

const HeroButtons = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8 }}
      className="mt-10 flex justify-center"
    >
      <Button
        href="#projects"
        variant="primary"
        size="lg"
        rightIcon={<FaArrowRight />}
      >
        View Projects
      </Button>
    </motion.div>
  );
};

export default HeroButtons;
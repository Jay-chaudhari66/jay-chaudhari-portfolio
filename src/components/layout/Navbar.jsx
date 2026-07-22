import { useEffect, useState } from "react";
import {
  HiMenu,
  HiX,
  HiDownload,
} from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

import { portfolio } from "../../data/portfolio";

const navLinks = [
  "Home",
  "About",
  "Skills",
  "Projects",
  "Experience",
  "Education",
  "Contact",
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sections = navLinks.map((item) =>
      document.getElementById(item.toLowerCase())
    );

    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      let current = "Home";

      sections.forEach((section) => {
        if (!section) return;

        const top = section.offsetTop - 120;

        if (window.scrollY >= top) {
          current =
            section.id.charAt(0).toUpperCase() +
            section.id.slice(1);
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-5 left-0 right-0 z-50 flex justify-center"
      >
        <div className="w-[95%] max-w-7xl">
          <div
            className={`
              flex items-center justify-between
              rounded-full
              border
              px-8
              ${
                scrolled
                  ? "py-3 border-cyan-500/20 bg-[#0D0D14]/90 shadow-[0_8px_40px_rgba(0,0,0,0.55)]"
                  : "py-4 border-white/10 bg-white/5 shadow-[0_8px_40px_rgba(0,0,0,0.35)]"
              }
              backdrop-blur-2xl
              transition-all
              duration-300
            `}
          >
            {/* Logo */}
            <a href="#home">
              <h1 className="flex items-center font-[Chakra_Petch] text-2xl font-bold tracking-wide text-white">
                Jay

                <motion.span
                  animate={{
                    scale: [1, 1.25, 1],
                    opacity: [1, 0.5, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="ml-1 text-cyan-400"
                >
                  ●
                </motion.span>
              </h1>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-8 lg:flex">
              {navLinks.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`group relative transition-all duration-300 ${
                    active === item
                      ? "text-cyan-400"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  {item}

                  <span
                    className={`absolute left-0 -bottom-1 h-0.5 bg-cyan-400 transition-all duration-300 ${
                      active === item
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </a>
              ))}
            </nav>

            {/* Resume Button */}
            <div className="hidden lg:block">
              <a
                href={portfolio.contact.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-white
                  px-6
                  py-3
                  font-semibold
                  text-black
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-cyan-500
                  hover:text-white
                  hover:shadow-lg
                  hover:shadow-cyan-500/30
                "
              >
                <HiDownload className="text-lg" />
                Resume
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="text-3xl text-white lg:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -30,
            }}
            transition={{
              duration: 0.3,
            }}
            className="fixed top-24 left-4 right-4 z-40 rounded-3xl border border-white/10 bg-[#0D0D14]/95 p-8 backdrop-blur-2xl lg:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className={`text-lg transition ${
                    active === item
                      ? "text-cyan-400"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  {item}
                </a>
              ))}

              <a
                href={portfolio.contact.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  mt-4
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-white
                  py-3
                  font-semibold
                  text-black
                  transition-all
                  duration-300
                  hover:bg-cyan-500
                  hover:text-white
                "
              >
                <HiDownload />
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
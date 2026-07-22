import { motion } from "framer-motion";
import { buttonSizes, buttonVariants } from "./buttonVariants";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  leftIcon,
  rightIcon,
  fullWidth = false,
  disabled = false,
  className = "",
  onClick,
  href,
  target = "_blank",
  rel = "noopener noreferrer",
  type = "button",
}) => {
  const classes = `
    inline-flex
    items-center
    justify-center
    gap-3
    rounded-full
    font-semibold
    select-none
    whitespace-nowrap
    transition-all
    duration-300

    focus:outline-none
    focus:ring-2
    focus:ring-cyan-500/50

    ${buttonVariants[variant]}
    ${buttonSizes[size]}
    ${fullWidth ? "w-full" : ""}
    ${disabled ? "cursor-not-allowed opacity-50" : ""}
    ${className}
  `;

  if (href) {
    return (
      <motion.a
        whileHover={
          disabled
            ? {}
            : {
                scale: 1.03,
                y: -2,
              }
        }
        whileTap={
          disabled
            ? {}
            : {
                scale: 0.97,
              }
        }
        transition={{
          duration: 0.25,
          ease: "easeOut",
        }}
        href={href}
        target={target}
        rel={rel}
        className={classes}
      >
        {leftIcon}

        <span>{children}</span>

        {rightIcon}
      </motion.a>
    );
  }

  return (
    <motion.button
      whileHover={
        disabled
          ? {}
          : {
              scale: 1.03,
              y: -2,
            }
      }
      whileTap={
        disabled
          ? {}
          : {
              scale: 0.97,
            }
      }
      transition={{
        duration: 0.25,
        ease: "easeOut",
      }}
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={classes}
    >
      {leftIcon}

      <span>{children}</span>

      {rightIcon}
    </motion.button>
  );
};

export default Button;
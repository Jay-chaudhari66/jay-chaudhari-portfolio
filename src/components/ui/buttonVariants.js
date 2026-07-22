export const buttonVariants = {
  primary: `
    bg-cyan-400
    text-[#05050A]
    font-semibold
    shadow-[0_0_20px_rgba(0,240,255,0.5),0_0_44px_rgba(0,240,255,0.2)]
    hover:bg-cyan-300
    hover:shadow-[0_0_28px_rgba(0,240,255,0.7),0_0_56px_rgba(0,240,255,0.3)]
  `,

  secondary: `
    bg-white/5
    text-white
    border
    border-fuchsia-500/40
    backdrop-blur-xl
    shadow-[0_0_16px_rgba(255,46,146,0.15)]
    hover:bg-white/10
    hover:border-fuchsia-400
    hover:shadow-[0_0_20px_rgba(255,46,146,0.4)]
  `,

  ghost: `
    bg-transparent
    text-white
    hover:bg-white/5
  `,
};

export const buttonSizes = {
  sm: "px-5 py-2 text-sm",

  md: "px-7 py-3 text-base",

  lg: "px-9 py-4 text-lg",
};
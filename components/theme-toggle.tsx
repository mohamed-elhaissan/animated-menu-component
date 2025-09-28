"use client";
import { motion } from "motion/react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const handleTheme = () => {
    if (theme == "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <div className="flex items-center justify-center gap-1">
      <Sun />
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="border cursor-pointer border-black/[0.08] relative h-7  rounded-full w-16 py-1 bg-[#e3e3e6]"
      >
        <motion.span
          animate={{
            x: theme === "dark" ? 10 : 35,
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0, 0.2, 1],
          }}
          className="w-5 h-5  absolute left-0 top-1/2 transition-all duration-75 ease-in-out -translate-y-1/2 bg-white inline-block rounded-full"
        ></motion.span>
      </button>
      <Moon />
    </div>
  );
};

export default ThemeToggle;

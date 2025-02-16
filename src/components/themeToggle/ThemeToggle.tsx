"use client";
import Image from "next/image";
import styles from "./themeToggle.module.css";
import { useTheme } from "@/context/ThemeContext";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const handleOnThemeToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div
      className={`${styles.container}`}
      onClick={handleOnThemeToggle}
      style={
        theme === "dark"
          ? { backgroundColor: "#939395" }
          : { backgroundColor: "#403838" }
      }
    >
      <Image src="/moon.svg" alt="moon icon" width={16} height={16} />
      <div
        className={`${styles.ball}`}
        style={
          theme === "dark"
            ? { left: 3, backgroundColor: "#0f172a" }
            : { right: 3, backgroundColor: "white" }
        }
      ></div>
      <Image src="/sun.svg" alt="sun icon" width={14} height={14} />
    </div>
  );
};

export default ThemeToggle;

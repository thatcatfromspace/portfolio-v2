import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { content } from "../data/content";
import styles from "./Header.module.css";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      return document.documentElement.classList.contains("dark");
    }
    return false;
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    document.documentElement.classList.toggle("dark", newIsDark);
  };

  return (
    <motion.header
      className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1 }}
    >
      <div className={styles.inner}>
        <a href="/" className={styles.logo} aria-label="Home">
          <span className={styles.logoFull}>DV</span>
          <span className={styles.logoAccent}>_</span>
        </a>

        <nav className={styles.nav}>
          <a href={content.resumeUrl} target="_blank" rel="noopener noreferrer" className={styles.navLink}>
            Resume
          </a>
          <a href={`mailto:${content.contactEmail}`} className={styles.navLink}>
            Contact
          </a>
          <button
            onClick={toggleTheme}
            className={styles.themeToggle}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            <span className={styles.themeIcon}>{isDark ? "◐" : "◑"}</span>
          </button>
        </nav>
      </div>
    </motion.header>
  );
};

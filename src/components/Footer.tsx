import { motion } from "framer-motion";
import { content } from "../data/content";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <motion.footer
      className={styles.footer}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.links}>
        <a
          href={content.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          GitHub
        </a>
        <a
          href={content.links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          LinkedIn
        </a>
        <a
          href={content.links.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          Twitter
        </a>
        <a
          href={content.links.blog}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          Blog
        </a>
      </div>
      
      <p className={styles.signoff}>Built with intention.</p>
    </motion.footer>
  );
};

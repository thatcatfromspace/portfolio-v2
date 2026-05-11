import { motion } from "framer-motion";
import { content } from "../data/content";
import styles from "./OpeningStatement.module.css";

export const OpeningStatement = () => {
  return (
    <section className={styles.section} data-sketch="hero">
      <motion.p 
        className={styles.signature}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        {content.name}
      </motion.p>
      <motion.p 
        className={styles.role}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        {content.role}
      </motion.p>
      <motion.h1 
        className={styles.headline}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.7, 
          delay: 0.5,
          ease: [0.16, 1, 0.3, 1] 
        }}
      >
        {content.headline}
      </motion.h1>

      <motion.p 
        className={styles.statement}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        {content.statement}
      </motion.p>

      <motion.div 
        className={styles.accentLine}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ 
          duration: 0.6, 
          delay: 1.3, 
          ease: [0.16, 1, 0.3, 1] 
        }}
      />
    </section>
  );
};

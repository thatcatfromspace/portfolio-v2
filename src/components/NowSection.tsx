import { motion } from "framer-motion";
import { timeline } from "../data/content";
import styles from "./NowSection.module.css";

export const NowSection = () => {
  return (
    <motion.section
      className={styles.section}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.timeline}>
        {timeline.map((entry, index) => (
          <div 
            key={index} 
            className={`
              ${styles.entry} 
              ${entry.current ? styles.current : styles.past}
              ${entry.type === "break" ? styles.break : ""}
            `}
          >
            <div className={styles.marker}>
              {entry.type === "break" ? (
                <span className={styles.breakDot} />
              ) : (
                <span className={styles.dot} />
              )}
              {index < timeline.length - 1 && <span className={styles.line} />}
            </div>
            <div className={styles.content}>
              <span className={styles.date}>{entry.date}</span>
              <p className={styles.text}>{entry.text}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

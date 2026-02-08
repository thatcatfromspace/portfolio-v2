import { motion } from "framer-motion";
import { experience } from "../data/experience";
import styles from "./ExperienceTable.module.css";

export const ExperienceTable = () => {
  return (
    <motion.section
      className={styles.section}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4 }}
    >
      <h2 className={styles.heading}>Experience</h2>
      <div className={styles.list}>
        {experience.map((exp, index) => (
          <div key={index} className={styles.row}>
            <div className={styles.main}>
              <div className={styles.roleWrap}>
                <span className={styles.role}>{exp.role}</span>
                {exp.current && <span className={styles.current}>now</span>}
              </div>
              <a href={exp.url} target="_blank" rel="noopener noreferrer" className={styles.company}>{exp.company}</a>
            </div>
            <span className={styles.period}>{exp.period}</span>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

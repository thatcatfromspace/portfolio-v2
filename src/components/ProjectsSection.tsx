import { motion } from "framer-motion";
import { projects } from "../data/projects";
import { ProjectCard } from "./ProjectCard";
import styles from "./ProjectsSection.module.css";

export const ProjectsSection = () => {
  return (
    <section className={styles.section} data-sketch="projects">
      <motion.h2 
        className={styles.heading}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        Selected Work
      </motion.h2>

      <div className={styles.grid}>
        {projects.map((project, index) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            index={index}
            featured={index === 0}
          />
        ))}
      </div>
    </section>
  );
};

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Project } from "../data/projects";
import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
  project: Project;
  index: number;
  featured?: boolean;
}

export const ProjectCard = ({ project, index, featured = false }: ProjectCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.article
      className={`${styles.card} ${featured ? styles.featured : ""} ${isExpanded ? styles.expanded : ""}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.12,
        ease: [0.16, 1, 0.3, 1]
      }}
      onClick={() => setIsExpanded(!isExpanded)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && setIsExpanded(!isExpanded)}
      aria-expanded={isExpanded}
    >
      <span className={styles.index}>0{index + 1}</span>

      <div className={styles.header}>
        <h3 className={styles.name}>{project.name}</h3>
        <span className={styles.year}>{project.year}</span>
      </div>
      
      <p className={styles.tagline}>{project.tagline}</p>

      <div className={styles.expandHint}>
        <motion.span
          className={styles.expandIcon}
          animate={{ rotate: isExpanded ? 45 : 0 }}
          transition={{ duration: 0.15 }}
        >
          +
        </motion.span>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            className={styles.details}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ 
              duration: 0.35, 
              ease: [0.16, 1, 0.3, 1],
              opacity: { duration: 0.2 }
            }}

          >
            <div className={styles.detailsInner}>
              <p className={styles.description}>{project.description}</p>
              
              <div className={styles.challenge}>
                <span className={styles.challengeLabel}>The hard part</span>
                <p className={styles.challengeText}>{project.challenge}</p>
              </div>

              <div className={styles.tech}>
                {project.tech.map((t) => (
                  <span key={t} className={styles.techBadge}>{t}</span>
                ))}
              </div>

              {(project.links.demo || project.links.source) && (
                <div className={styles.links}>
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.link}
                      onClick={(e) => e.stopPropagation()}
                    >
                      Demo ↗
                    </a>
                  )}
                  {project.links.source && (
                    <a
                      href={project.links.source}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.link}
                      onClick={(e) => e.stopPropagation()}
                    >
                      Code ↗
                    </a>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
};

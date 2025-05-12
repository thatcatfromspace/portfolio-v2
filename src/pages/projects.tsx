import { motion } from "framer-motion";
import { ProjectCard } from "../project-card";
import { projects } from "../projects";
import { platforms } from "../platforms";

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-background font-sans">
      <div className="flex flex-col items-center">
        <motion.div
          className="mt-5 flex items-center gap-x-6 transition-all sm:gap-x-3"
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {platforms.map((platform) => (
            <motion.a
              href={platform.platformLink}
              target="_blank"
              key={platform.platform}
            >
              <img
                src={platform.imageLink}
                alt={platform.platform}
                height={platform.platform === "twitter" ? 15 : 20}
                width={platform.platform === "twitter" ? 15 : 20}
              />
            </motion.a>
          ))}
        </motion.div>
        <div className="mt-10 px-6 sm:mt-5 lg:px-32">
          <h2 className="font-heading text-3xl font-semibold text-muted-foreground">
            My Projects
          </h2>
        </div>
        <div className="mt-5 w-full pb-10">
          <motion.div
            className="grid grid-cols-1 justify-center gap-x-4 gap-y-8 px-6 dark:text-slate-300 md:grid-cols-3 lg:px-32"
            animate={{ translateY: -10 }}
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {projects.map((project) => (
              <ProjectCard
                key={project.name}
                projectName={project.name}
                projectDesc={project.desc}
                projectFrameworks={project.frameworks}
                projectLink={project.link}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;

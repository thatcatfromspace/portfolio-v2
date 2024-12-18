import "./App.css";
import "./gradient.css";
import "./index.css";
import { useState, useEffect } from "react";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import moon from "./assets/moon.png";
import oddish from "./assets/oddish.png";
import resume from "./assets/dinesh-tv-resume.pdf";
import { motion } from "framer-motion";
import { projects } from "./projects.ts";
import { platforms } from "./platforms.ts";
import { TextLoop } from "react-text-loop-ts";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "../components/ui/sheet";
import { Menu } from "lucide-react";
import { ProjectCard } from "./project-card.tsx";

export const Landing = () => {
  const [noDarkMode, setDarkMode] = useState(true);
  const [showGradient, setShowGradient] = useState(false);

  const darkModeFunction = () => {
    {
      if (noDarkMode) {
        setDarkMode(false);
        document.documentElement.classList.add("dark");
      } else {
        setDarkMode(true);
        document.documentElement.classList.remove("dark");
      }
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setShowGradient(true);
    }, 4000);
  }, []);

  return (
    <>
      <div className="h-[100%] min-h-[100vh] scroll-smooth bg-background font-sans">
        <nav className="sticky flex justify-between p-5 dark:text-slate-300 sm:justify-between md:px-28 lg:px-48">
          <div className="flex items-center gap-x-3 font-heading text-lg font-bold">
            <a href="https://pokemondb.net/pokedex/oddish" target="_blank">
              <img src={oddish} alt="avatar" height={30} width={30} />
            </a>
            <p>Dinesh Veluswamy</p>
          </div>
          <div className="flex items-center gap-x-10 font-semibold text-neutral-400">
            <a href={resume} target="_blank">
              <span className="hidden cursor-pointer hover:underline active:text-slate-300 sm:flex">
                Resume
              </span>
            </a>
            <a href="mailto:dineshveluswamy@gmail.com">
              <span className="hidden cursor-pointer hover:underline dark:active:text-slate-300 sm:flex">
                Contact
              </span>
            </a>
            <div
              onClick={darkModeFunction}
              className="hidden cursor-pointer sm:flex"
            >
              <img src={moon} alt="moon" height={20} width={20} />
            </div>
          </div>
          <div className="flex sm:hidden">
            <Sheet>
              <SheetTrigger>
                <Menu />
              </SheetTrigger>
              <SheetContent className="flex w-[300px] flex-col font-semibold text-black dark:text-slate-300 sm:w-[440px]">
                <SheetTitle className="invisible">Mobile Navbar</SheetTitle>
                <a href={resume} target="_blank" aria-label="Resume">
                  <span className="cursor-pointer hover:underline active:text-slate-300 sm:flex">
                    Resume
                  </span>
                </a>
                <a
                  href="mailto:dineshveluswamy@gmail.com"
                  aria-label="email id"
                >
                  <span className="cursor-pointer hover:underline dark:active:text-slate-300 sm:flex">
                    Contact
                  </span>
                </a>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
        <div className="flex flex-col px-6 antialiased lg:my-20 lg:px-32">
          <div className="mt-16 flex cursor-default">
            {showGradient ? (
              <h1 className="font-heading text-4xl font-semibold leading-snug tracking-wide dark:text-slate-300">
                Hey, I'm&nbsp;
                <span className="name font-heading font-bold leading-snug tracking-wide">
                  Dinesh&nbsp;
                </span>
                and I'm a&nbsp; <TextLoop texts={["Software Engineer.", "Full Stack Developer.", "Web3 Enthusiast.", "Team Leader.", "Systems Designer."]} interval={3000} />
              </h1>
            ) : (
              <TextGenerateEffect words={"Hey, I'm Dinesh and I'm a Web Developer."} />
            )}
          </div>
          <div className="mt-4 flex">
            <p className="text-lg dark:text-slate-300 sm:w-3/5">
              I'm a software developer specializing in building responsive,
              performant and elegant websites. I'm currently exploring different JavaScript frameworks and advanced C++. I'm also an open
              source contributor. 
            </p>
          </div>
          <motion.div
            className="mt-5 flex items-center gap-x-6 transition-all sm:gap-x-3"
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {platforms.map((platform) => (
              <motion.a href={platform.platformLink} target="_blank">
                <img
                  src={platform.imageLink}
                  alt={platform.platform}
                  height={platform.platform === "twitter" ? 15 : 20}
                  width={platform.platform === "twitter" ? 15 : 20}
                />
              </motion.a>
            ))}
          </motion.div>
        </div>
        <div className="mt-10 px-6 sm:mt-5 lg:px-32">
          <h2 className="font-heading text-3xl font-semibold text-muted-foreground">
            My Projects
          </h2>
        </div>
        <div className="mt-5">
          <motion.div
            className="grid grid-cols-1 justify-center gap-4 px-6 dark:text-slate-300 md:grid-cols-3 lg:px-32"
            animate={{ translateY: -10 }}
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {projects.map((project) => (
              <ProjectCard
                projectName={project.name}
                projectDesc={project.desc}
                projectFrameworks={project.frameworks}
                projectLink={project.link}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
};

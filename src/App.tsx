import "./App.css";
import "./gradient.css";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import moon from "./assets/moon.png";
import oddish from "./assets/oddish.png";
import resume from "./assets/dinesh-tv-resume.pdf";
import { motion, useAnimate } from "framer-motion";
import { projects } from "./projects.ts";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../components/ui/sheet";
import { Ham, Menu } from "lucide-react";
import { ProjectCard } from "./assets/project-card.tsx";

function App() {
  <Router basename="/portfolio">
    <Routes>
      <Route path="/" element="" />
    </Routes>
  </Router>;

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
      <div className="bg-background h-[100%] min-h-[100vh] scroll-smooth">
        <nav className="sticky flex justify-between p-5 dark:text-slate-300 sm:justify-between md:px-28 lg:px-48">
          <div className="font-heading flex items-center gap-x-3 text-lg font-bold">
            <img src={oddish} alt="avatar" height={30} width={30} />
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
                <a href={resume} target="_blank">
                  <span className="cursor-pointer hover:underline active:text-slate-300 sm:flex">
                    Resume
                  </span>
                </a>
                <a href="mailto:dineshveluswamy@gmail.com">
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
                Hi, I'm&nbsp;
                <span className="name font-heading font-bold leading-snug tracking-wide">
                  Dinesh.
                </span>
              </h1>
            ) : (
              <TextGenerateEffect words={"Hi, I'm Dinesh."} />
            )}
          </div>
          <div className="mt-4 flex">
            <p className="text-lg dark:text-slate-300 sm:w-2/5">
              I'm a software developer specializing in building responsive,
              performant and elegant websites. I'm currently working on creating
              business oriented websites with JavaScript. I also occassionally
              teach.
            </p>
          </div>
        </div>
        <div className="mt-10 px-6 lg:px-32">
          <h2 className="font-heading text-muted-foreground text-3xl font-semibold">
            My Projects
          </h2>
        </div>
        <div className="mt-12">
          <motion.div
            className="grid grid-cols-1 justify-center gap-4 px-6 dark:text-slate-300 md:grid-cols-3 lg:px-32"
            animate={{ translateY: -10 }}
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {projects.map((project, index) => (
              <ProjectCard
                projectName={project.name}
                projectDesc={project.desc}
                projectFrameworks={project.frameworks}
              />
            ))}
            <div className="flex justify-center">hello</div>
            <div className="flex justify-center">hola</div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default App;

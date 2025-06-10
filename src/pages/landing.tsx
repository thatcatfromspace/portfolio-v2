import "../App.css";
import "../gradient.css";
import "../index.css";
import { platforms } from "../platforms";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { TextGenerateEffect } from "../../components/ui/text-generate-effect";
import { TextLoop } from "react-text-loop-ts";
import { workExperience } from "../work-experience";
import { CustomCursor } from "../../components/ui/custom-cursor";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Landing = () => {
  const [showGradient, setShowGradient] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowGradient(true);
    }, 4000);
  }, []);

  const navigate = useNavigate();

  return (
    <div className="relative flex min-h-[95vh] w-full flex-col items-center justify-center px-6 antialiased lg:px-32">
      <CustomCursor />
      <div className="flex w-full flex-col items-start justify-center">
        {showGradient ? (
          <h1 className="text-left font-heading text-4xl font-semibold leading-snug tracking-wide dark:text-slate-300">
            Hey, I'm&nbsp;
            <span className="name font-heading font-bold leading-snug tracking-wide">
              Dinesh&nbsp;
            </span>
            and I'm a&nbsp;{" "}
            <TextLoop
              texts={[
                "Software Engineer.",
                "Full Stack Developer.",
                "LLM Enthusiast.",
                "Team Leader.",
                "Systems Designer.",
                "Distrohopper.",
              ]}
              interval={3000}
            />
          </h1>
        ) : (
          <TextGenerateEffect
            words={"Hey, I'm Dinesh and I'm a Web Developer."}
          />
        )}
      </div>
      <div className="mt-4 flex w-full flex-col items-start justify-center">
        <p className="text-left text-lg dark:text-slate-300 sm:w-3/5">
          I'm a software developer and data engineer specializing in building
          products that matter.{" "}
          {/* I'm currently an intern at{" "}
          <span className="underline underline-offset-1">
            <a href="https://thorogood.com">Thorogood Associates.</a>
          </span>{" "} */}
          I thrive on collaboration and am always excited to explore ideas or
          take on challenging development projects.
        </p>
        <div className="mt-8 w-full">
          <h2 className="mb-4 text-xl font-bold dark:text-slate-200">
            Work Experience
          </h2>
          <div className="w-3/5 space-y-6">
            {workExperience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="rounded-lg bg-white/70 p-4 shadow-md backdrop-blur-sm dark:bg-slate-800/60"
              >
                <h3 className="text-lg font-semibold dark:text-white">
                  {exp.role} @{" "}
                  <span className="bg-gradient-to-r from-pink-500 from-20% to-purple-400 bg-clip-text text-transparent">
                    {exp.company}
                  </span>
                </h3>
                <p className="text-sm italic text-gray-600 dark:text-slate-300">
                  {exp.period}
                </p>
                <p className="mt-2 text-[15px] text-gray-800 dark:text-slate-200">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* <SkillsSection /> */}
        <div className="group mt-6 transition-transform duration-500 hover:scale-105">
          <motion.span
            onClick={() => navigate("/projects")}
            className="inline-flex cursor-pointer items-center gap-2 rounded-lg bg-gradient-to-tr from-blue-400 via-pink-400 to-purple-400 px-4 py-2 text-white shadow-lg transition-all hover:scale-110 hover:shadow-xl focus:outline-none dark:from-blue-500/50 dark:via-pink-500/50 dark:to-purple-500/50 dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Peep My Projects
            <ArrowRight
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-y-110"
              height={20}
              width={20}
            />
          </motion.span>
        </div>
        <div className="mt-6 font-heading">
          <h2 className="text-lg font-bold dark:text-slate-300">
            {"Let's Connect!"}
          </h2>
        </div>
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
                height={platform.platform === "twitter" ? 20 : 25}
                width={platform.platform === "twitter" ? 20 : 25}
              />
            </motion.a>
          ))}
        </motion.div>
        {/* Animated floating scroll-to-top button */}
        {/* <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 z-40 rounded-full bg-gradient-to-tr from-blue-400 via-pink-400 to-purple-400 p-3 shadow-lg transition-all hover:scale-110 hover:shadow-2xl focus:outline-none"
          aria-label="Scroll to top"
        >
          <ArrowUp height={24} width={24} color="white" />
        </button> */}
        {/* Subtle animated gradient background */}
        <div className="animate-gradient-move pointer-events-none fixed inset-0 -z-10 bg-gradient-to-br from-blue-100/20 via-pink-100/20 to-purple-100/20 blur-2xl dark:from-blue-900/10 dark:via-pink-900/10 dark:to-purple-900/10" />
      </div>
    </div>
  );
};

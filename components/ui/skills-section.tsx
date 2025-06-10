"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { MouseEvent, useState } from "react";

const skills = [
  {
    name: "React",
    icon: "https://raw.githubusercontent.com/thatcatfromspace/portfolio-v2/main/src/assets/react.svg",
  },
  {
    name: "Next.js",
    icon: "https://raw.githubusercontent.com/thatcatfromspace/portfolio-v2/refs/heads/main/src/assets/nextjs.svg",
  },
  {
    name: "Python",
    icon: "https://raw.githubusercontent.com/thatcatfromspace/portfolio-v2/main/src/assets/python.svg",
  },
  {
    name: "FastAPI",
    icon: "https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/fastapi/fastapi-original.svg",
  },
  {
    name: "PostgreSQL",
    icon: "https://raw.githubusercontent.com/thatcatfromspace/portfolio-v2/main/src/assets/postgresql.svg",
  },
];

const TechCard = ({
  skill,
  index,
}: {
  skill: (typeof skills)[0];
  index: number;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      key={skill.name}
      className="group relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setIsHovered(true)}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
    >
      <div
        className={`group flex h-24 w-24 flex-col items-center justify-center gap-2 rounded-xl bg-gradient-to-br p-4 transition-all duration-300 ${isHovered ? "from-slate-100 to-slate-200 shadow-lg dark:from-slate-800 dark:to-slate-900" : "from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800"}`}
        style={{
          transform: "translateZ(8px)",
        }}
      >
        <motion.img
          src={skill.icon}
          alt={skill.name}
          className={`h-8 w-8 grayscale group-hover:grayscale-0`}
          style={{
            transform: "translateZ(20px)",
          }}
        />
        <motion.span
          className="text-center text-sm font-medium dark:text-slate-300"
          style={{
            transform: "translateZ(20px)",
          }}
        >
          {skill.name}
        </motion.span>
      </div>
    </motion.div>
  );
};

export const SkillsSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="mt-5 w-full"
    >
      <h2 className="mb-5 text-xl font-semibold dark:text-slate-300">
        Tech Stack
      </h2>
      <div className="grid w-3/4 grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {skills.map((skill, index) => (
          <TechCard key={skill.name} skill={skill} index={index} />
        ))}
      </div>
    </motion.div>
  );
};

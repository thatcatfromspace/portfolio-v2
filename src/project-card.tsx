import { ArrowUpRight } from "lucide-react";

export const ProjectCard = ({
  projectName,
  projectDesc,
  projectFrameworks,
  projectLink,
}: {
  projectName: string;
  projectDesc: string;
  projectFrameworks: Array<string>;
  projectLink?: string;
}) => {
  return (
    <div className="group w-full cursor-pointer flex-col rounded-xl border border-neutral-200 bg-white/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-neutral-300 hover:shadow-lg dark:border-neutral-800 dark:bg-slate-900/50 dark:text-slate-300 dark:hover:border-neutral-700">
      <div className="flex items-center justify-between">
        <a
          href={projectLink}
          target="_blank"
          className="transition-colors duration-200 group-hover:text-blue-500 dark:group-hover:text-blue-400"
        >
          <h3 className="text-xl font-heading font-semibold">{projectName}</h3>
        </a>
        {projectLink ? (
          <ArrowUpRight
            className="text-neutral-400 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-500 dark:group-hover:text-blue-400"
            height={20}
          />
        ) : null}
      </div>
      <p className="mt-2 break-words text-neutral-600 dark:text-neutral-400">
        {projectDesc}
      </p>
      <div className="mt-4 flex flex-wrap items-center gap-3">
        {projectFrameworks.map((framework, index) => (
          <div
            key={index}
            className="transition-transform duration-200 hover:scale-110"
          >
            <img
              src={framework}
              alt={"framework" + framework.toString()}
              height={24}
              width={24}
              className="opacity-70 grayscale group-hover:grayscale-0 transition-opacity duration-200 hover:opacity-100 dark:brightness-90"
              key={framework}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

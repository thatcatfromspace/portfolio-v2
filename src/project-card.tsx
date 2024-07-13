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
    <div className="w-full cursor-pointer flex-col rounded-lg p-4 dark:text-slate-300">
      <div className="group flex items-center justify-start">
        <a href={projectLink} target="_blank">
          <h3 className="text-lg font-semibold">{projectName}</h3>
        </a>
        {projectLink ? (
          <ArrowUpRight
            stroke="grey"
            height={20}
            className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        ) : null}
      </div>
      <p className="text-muted-foreground break-words">{projectDesc}</p>
      <div className="mt-3 flex justify-start gap-x-3">
        {projectFrameworks.map((framework, index) => (
          <div key={index}>
            <img
              src={framework}
              alt={"framework" + framework.toString()}
              height={30}
              width={30}
              key={framework}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

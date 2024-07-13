export const ProjectCard = ({
  projectName,
  projectDesc,
  projectFrameworks,
}: {
  projectName: string;
  projectDesc: string;
  projectFrameworks: Array<string>;
}) => {
  return (
    <div className="h-36 w-full flex-col rounded-lg p-4 shadow-lg dark:text-slate-300">
      <h3 className="text-lg font-semibold">{projectName}</h3>
      <p className="text-muted-foreground break-words">{projectDesc}</p>
      <div className="mt-3 flex justify-start gap-x-3">
        {projectFrameworks.map((framework, index) => (
          <div key={index}>
            <img
              src={framework}
              alt={"framework" + framework.toString()}
              height={30}
              width={30}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export const ProjectCard = ({
  projectName,
  projectDesc,
  projectFrameworks,
}: {
  projectName: string;
  projectDesc: string;
  projectFrameworks: string | Array<string>;
}) => {
  return (
    <div className="h-36 w-full flex-col rounded-lg p-4 shadow-lg dark:text-slate-300">
      <h3 className="text-lg font-semibold">{projectName}</h3>
      <p className="text-muted-foreground break-words">{projectDesc}</p>
    </div>
  );
};

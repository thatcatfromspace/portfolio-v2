import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "../../utils/cn";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray: Array<string> = words.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.3),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className={
                word === "Dinesh."
                  ? "dark:text-[#23a6d5] cursor-default font-bold text-black opacity-0"
                  : "dark:text-slate-300 text-black opacity-0"
              }
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-normal", className)}>
      <div>
        <div className=" dark:text-slate-300 text-black text-4xl leading-snug tracking-wide font-heading font-semibold">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    document.addEventListener("mouseover", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      document.removeEventListener("mouseover", handleMouseEnter);
    };
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-50 mix-blend-difference"
      animate={{
        x: mousePosition.x - (isHovering ? 20 : 5),
        y: mousePosition.y - (isHovering ? 20 : 5),
        scale: isHovering ? 2 : 1,
      }}
      transition={{ type: "spring", stiffness: 500, damping: 28 }}
    >
      <div
        className={`h-[10px] w-[10px] rounded-full bg-white transition-all ${isHovering ? "opacity-50" : "opacity-100"}`}
      />
    </motion.div>
  );
};

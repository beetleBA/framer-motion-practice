import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect } from "react";

export const CustomCursor = () => {
  const mouseX = useMotionValue(-20);
  const mouseY = useMotionValue(-20);

  const smoothX = useSpring(mouseX, {
    stiffness: 300,
    damping: 30,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 300,
    damping: 30,
  });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="custom-cursor"
      style={{
        x: smoothX,
        y: smoothY,
      }}
    />
  );
};

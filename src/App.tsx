import {
  easeOut,
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "motion/react";
import FirstPage from "./FirstPage";
import { Header } from "./Header";
import { LightBackgroundClouds } from "./LightBackgroundClouds";
import { useRef } from "react";

export default function ScrollSlider() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const scale = useTransform(
    scrollYProgress,
    [0, 0.4, 1],
    [1, 2, 4],
    { ease: easeOut }
  );

  const smoothScale = useSpring(scale, {
    stiffness: 120,
    damping: 30,
    mass: 0.3,
  });

  const firstOpacity = useTransform(
    scrollYProgress,
    [0.65, 0.85], // 65% - полностью видна
    [1, 0]
  );

  const secondOpacity = useTransform(
    scrollYProgress,
    [1, 1],
    [0, 1]
  );

  return (
    <div ref={containerRef} className="relative w-full h-[120vh]">
      <Header />
      <LightBackgroundClouds />

      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={{
            scale: smoothScale,
            opacity: firstOpacity,
          }}
        >
          <FirstPage scale={smoothScale} />
        </motion.div>

        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          style={{ opacity: secondOpacity }}
        >
          <h1 className="text-6xl text-white">Привет</h1>
        </motion.div>
      </div>
    </div>
  );
}
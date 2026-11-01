import { easeOut, useScroll, useTransform } from "motion/react";
import FirstPage from "./FirstPage";
import { Header } from "./Header";
import { LightBackgroundClouds } from "./LightBackgroundClouds";
import { useRef } from "react";
import { useSpring } from "motion/react";

export default function ScrollSlider() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.4, 1], [1, 5, 7], {
    ease: easeOut,
  });
  const smoothScale = useSpring(scale, {
    stiffness: 120,
    damping: 30,
    mass: 0.3,
  });

  return (
    <div ref={containerRef} className="w-full h-[105vh] ">
      <Header />
      <LightBackgroundClouds />
      <FirstPage scale={smoothScale} />
    </div>
  );
}

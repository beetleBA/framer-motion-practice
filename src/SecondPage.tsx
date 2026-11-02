import {
  motion,
  useSpring,
  useTransform,
  type MotionValue,
} from "motion/react";

type SecondPageProps = {
  scrollYProgress: MotionValue<number>;
};

export const SecondPage = ({ scrollYProgress }: SecondPageProps) => {
  const textScale = useTransform(scrollYProgress, [0.7, 0.9], [0.2, 1]);

  const textOpacity = useTransform(scrollYProgress, [0.75, 0.85], [0, 1]);

  const smoothScale = useSpring(textScale, {
    stiffness: 70,
    damping: 25,
    mass: 0.5,
  });

  const smoothOpacity = useSpring(textOpacity, {
    stiffness: 70,
    damping: 25,
    mass: 0.5,
  });

  return (
    <div>
      <MainText scale={smoothScale} opacity={smoothOpacity} />
    </div>
  );
};

const MainText = ({
  scale,
  opacity,
}: {
  scale: MotionValue<number>;
  opacity: MotionValue<number>;
}) => {
  return (
    <motion.div
      className="flex flex-col items-center relative top-[15dvh] justify-center text-center"
      style={{ scale, opacity }}
    >
      <h1 className="viaoda-libre-regular text-[77px] text-white">
        Create Beyond Reality
      </h1>

      <p className="imprima-regular text-white text-[24px] max-w-3xl">
        Exclusive journeys to breathtaking destinations curated for travelers
        seeking rare and unforgettable experiences.
      </p>
    </motion.div>
  );
};

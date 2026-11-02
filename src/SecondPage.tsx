import {
  motion,
  useSpring,
  useTransform,
  type MotionValue,
} from "motion/react";
import cloudsImage from "./assets/clouds2.png";

type SecondPageProps = {
  scrollYProgress: MotionValue<number>;
};

export const SecondPage = ({ scrollYProgress }: SecondPageProps) => {
  const textScale = useTransform(scrollYProgress, [0.7, 0.9], [0.2, 1]);
  const cloudsTransform = useTransform(scrollYProgress, [0.7, 0.9], [50, 0]);
  const cloudsTransformRotate = useTransform(
    scrollYProgress,
    [0.7, 0.9],
    [0, -5],
  );
  const cloudsTransformX = useTransform(scrollYProgress, [0.7, 0.9], [-30, 0]);
  const cloudOpacity = useTransform(scrollYProgress, [0.75, 0.85], [0, 1]);

  const smoothScale = useSpring(textScale, {
    stiffness: 90,
    damping: 25,
    mass: 0.5,
  });
  const smoothTransform = useSpring(cloudsTransform, {
    stiffness: 70,
    damping: 25,
    mass: 0.5,
  });
  const smoothTransformX = useSpring(cloudsTransformX, {
    stiffness: 70,
    damping: 25,
    mass: 0.5,
  });
  const smoothTransformRotate = useSpring(cloudsTransformRotate, {
    stiffness: 70,
    damping: 25,
    mass: 0.5,
  });
  const smoothOpacity = useSpring(cloudOpacity, {
    stiffness: 120,
    damping: 25,
    mass: 0.5,
  });

  return (
    <div className="relative w-full h-full">
      <MainText scale={smoothScale} />
      <BgCloudsSecond
        rotate={smoothTransformRotate}
        x={smoothTransformX}
        opacity={smoothOpacity}
      />
      <BgCloudsFirst y={smoothTransform} opacity={smoothOpacity} />
    </div>
  );
};

const MainText = ({ scale }: { scale: MotionValue<number> }) => {
  return (
    <motion.div
      className="flex flex-col items-center relative top-[15dvh] justify-center text-center"
      style={{ scale }}
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

const BgCloudsFirst = ({
  y,
  rotate,
  opacity,
}: {
  y?: MotionValue<number>;
  rotate?: MotionValue<number>;
  opacity?: MotionValue<number>;
}) => {
  return (
    <motion.div
      className="absolute bottom-0 w-full"
      style={{ y, rotate, opacity }}
    >
      <img src={cloudsImage} alt="" className=" w-full object-cover z-5" />
    </motion.div>
  );
};
const BgCloudsSecond = ({
  x,
  rotate,
  opacity,
}: {
  x?: MotionValue<number>;
  rotate?: MotionValue<number>;
  opacity?: MotionValue<number>;
}) => {
  return (
    <motion.div
      className="absolute -bottom-5 w-full scale-110"
      style={{ x, rotate, opacity }}
    >
      <img src={cloudsImage} alt="" className=" w-full object-cover z-5" />
    </motion.div>
  );
};

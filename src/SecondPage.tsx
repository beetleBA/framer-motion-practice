import {
  motion,
  useSpring,
  useTransform,
  type MotionValue,
} from "motion/react";
import cloudsImage from "./assets/clouds2.png";
import { ArrowSVG } from "./ArrowSVG";

type SecondPageProps = {
  scrollYProgress: MotionValue<number>;
};

const cards = [
  {
    id: "1",
    color: "bg-[#C7E9F5]",
    arrColor: "bg-[#263237]",
    title: "Private Retreats",
    desc: "Discover secluded destinations far from crowded tourism.",
  },
  {
    id: "2",
    color: "bg-[#E2F5C7]",
    arrColor: "bg-[#313726]",
    title: "Nature Escapes",
    desc: "Reconnect with untouched landscapes and silence.",
  },
  {
    id: "3",
    color: "bg-[#F5C7C7]",
    arrColor: "bg-[#372626]",
    title: "Exclusive Access",
    desc: "Unlock locations unavailable to the public.",
  },
  {
    id: "4",
    color: "bg-[#F5EBC7]",
    arrColor: "bg-[#373326]",
    title: "Curated Adventures",
    desc: "Experiences tailored to your lifestyle and preferences.",
  },
  {
    id: "5",
    color: "bg-[#DEC7F5]",
    arrColor: "bg-[#2C2637]",
    title: "Private Retreats",
    desc: "Discover secluded destinations far from crowded tourism.",
  },
  {
    id: "1",
    color: "bg-[#C7E9F5]",
    arrColor: "bg-[#263237]",
    title: "Private Retreats",
    desc: "Discover secluded destinations far from crowded tourism.",
  },
  {
    id: "2",
    color: "bg-[#E2F5C7]",
    arrColor: "bg-[#313726]",
    title: "Nature Escapes",
    desc: "Reconnect with untouched landscapes and silence.",
  },
  {
    id: "3",
    color: "bg-[#F5C7C7]",
    arrColor: "bg-[#372626]",
    title: "Exclusive Access",
    desc: "Unlock locations unavailable to the public.",
  },
  {
    id: "4",
    color: "bg-[#F5EBC7]",
    arrColor: "bg-[#373326]",
    title: "Curated Adventures",
    desc: "Experiences tailored to your lifestyle and preferences.",
  },
];

export const SecondPage = ({ scrollYProgress }: SecondPageProps) => {
  const cardX = useTransform(scrollYProgress, [0.04, 1], [0, -1000]);

  const textScale = useTransform(scrollYProgress, [0.04, 0.05], [0.3, 1]);
  const cardsInitialTransform = useTransform(
    scrollYProgress,
    [0.04, 0.05],
    [1000, 0],
  );
  const cloudsTransform = useTransform(scrollYProgress, [0.04, 0.05], [50, 30]);
  const cloudsTransformRotate = useTransform(
    scrollYProgress,
    [0.04, 0.05],
    [0, -5],
  );
  const cloudsTransformX = useTransform(
    scrollYProgress,
    [0.04, 0.05],
    [-30, -20],
  );
  const cloudOpacity = useTransform(scrollYProgress, [0.04, 0.05], [0, 1]);

  const smoothScale = useSpring(textScale, {
    stiffness: 90,
    damping: 25,
    mass: 0.5,
  });
  const smoothCardsInitial = useSpring(cardsInitialTransform, {
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
    <div className="relative w-full h-[200vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <MainText scale={smoothScale} />

        <BgCloudsFirst y={smoothTransform} opacity={smoothOpacity} />
        <motion.div
          style={{ x: cardX, y: smoothCardsInitial }}
          className="absolute bottom-45 left-0 flex w-max gap-6 px-10"
        >
          {cards.map((card, index) => (
            <AnimatedCard
              key={`${index}-${card.id}`}
              card={card}
              index={index}
              cardX={cardX}
            />
          ))}
        </motion.div>
        <BgCloudsSecond
          rotate={smoothTransformRotate}
          x={smoothTransformX}
          opacity={smoothOpacity}
        />
      </div>
    </div>
  );
};
const AnimatedCard = ({
  card,
  index,
  cardX,
}: {
  card: any;
  index: number;
  cardX: MotionValue<number>;
}) => {
  const cardCenter = 40 + index * (226 + 24) + 113;

  const distance = useTransform(
    cardX,
    (x) => cardCenter + x - window.innerWidth / 2,
  );

  const radius = 1500;

  const rotate = useTransform(distance, (value) => {
    return Math.asin(value / radius) * (180 / Math.PI);
  });

  const y = useTransform(distance, (value) => {
    return radius - Math.sqrt(radius ** 2 - value ** 2);
  });
  return (
    <motion.div
      className={`h-56 w-56.5 rounded-[40px] ${card.color} shrink-0`}
      key={card.id}
      style={{ rotate, y }}
    >
      <div
        className={`mt-3 mr-3 w-11 h-11 ml-auto ${card.arrColor} opacity-20 rounded-full flex items-center justify-center`}
      >
        <div className={`text-[#C7E9F5] transition-colors duration-300`}>
          <ArrowSVG />
        </div>
      </div>
      <div className={`flex flex-col gap-3 p-4 pt-1 shrink-0 justify-end`}>
        <h2 className="max-w-45 viaoda-libre-regular leading-8 text-3xl font-bold text-[#372626]">
          {card.title}
        </h2>
        <p className="imprima-regular text-[#372626] min-h-[4.5em]">
          {card.desc}
        </p>
      </div>
    </motion.div>
  );
};
const MainText = ({ scale }: { scale: MotionValue<number> }) => {
  return (
    <motion.div
      className="flex flex-col items-center relative top-[15dvh] justify-center text-center"
      style={{ scale }}
    >
      <h1 className="viaoda-libre-regular text-[77px] text-white uppercase">
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
      className="absolute bottom-0 w-full z-100"
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
      className="absolute -bottom-5 w-full scale-110 z-100"
      style={{ x, rotate, opacity }}
    >
      <img src={cloudsImage} alt="" className=" w-full object-cover z-5" />
    </motion.div>
  );
};

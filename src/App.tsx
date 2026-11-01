import { motion, type Transition } from "motion/react";
import rightImage from "./assets/1.png";
import leftImage from "./assets/2.png";
import cloudsImage from "./assets/clouds.png";
import preenchimentoImage from "./assets/Preenchimento generativo 1.png";
import bgImage from "./assets/bg1.png";
import logoImage from "./assets/logo.png";
import unionImage from "./assets/Union.png";

import card1Image from "./assets/image 33 (1).png";
import card2Image from "./assets/image 33.png";
import card3Image from "./assets/image 33 (2).png";

import watchDemoImage from "./assets/Polygon 2.png";

const transition: Transition = {
  duration: 0.3,
  delay: 0.1,
  ease: "easeIn",
};
export default function ScrollSlider() {
  return (
    <div className="w-full h-screen relative overflow-hidden">
      <Header />
      <div className="grid grid-cols-2 relative top-[15dvh] items-center">
        <MainText />
        <RightCards />
      </div>
      <LightBackgroundClouds />
      <BackgroundPortal />
      <ForegroundImage />
    </div>
  );
}

const BackgroundPortal = () => {
  const transition: Transition = {
    duration: 0.4,
    // delay: 0.1,
    ease: "easeOut",
  };
  return (
    <motion.div
      className="absolute inset-0 z-2"
      initial={{ scale: 2 }}
      animate={{ scale: 1 }}
      transition={transition}
    >
      <img src={bgImage} alt="" className=" w-full object-cover z-5" />
    </motion.div>
  );
};

const ForegroundImage = () => {
  return (
    <div className="absolute inset-0 z-10">
      <motion.img
        src={rightImage}
        alt=""
        className="absolute right-0 top-0 h-full object-cover z-1"
        initial={{ x: 0 }}
        animate={{ x: "60%" }}
        transition={transition}
      />
      <motion.img
        src={leftImage}
        alt=""
        className="absolute left-0 top-0 h-full object-cover"
        initial={{ x: 0 }}
        animate={{ x: "-60%" }}
        transition={transition}
      />
    </div>
  );
};

const LightBackgroundClouds = () => {
  return (
    <div className="absolute inset-0">
      <img
        src={cloudsImage}
        alt=""
        className="h-full w-full object-cover z-1"
      />
      <img
        src={preenchimentoImage}
        alt=""
        className="w-full object-cover z-2 absolute bottom-0"
      />
      <div className="z-3 absolute w-full bottom-0 h-75 bg-linear-to-t from-neutral-950/70" />
    </div>
  );
};

const Header = () => {
  return (
    <motion.div
      className="py-5 z-100 grid grid-cols-3 gap-5 items-center relative text-white imprima-regular"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={transition}
    >
      <div className="flex justify-around gap-4">
        <a href="#">Home</a>
        <a href="#" className="opacity-60">
          Studio
        </a>
        <a href="#" className="opacity-60">
          Experiences
        </a>
      </div>
      <div className="flex items-center justify-center">
        <img src={logoImage} alt="" />
      </div>
      <div className="flex justify-around gap-4 opacity-60">
        <a href="#">Technologies</a>
        <a href="#">Journal</a>
        <a href="#">Contact</a>
      </div>
    </motion.div>
  );
};

const MainText = () => {
  return (
    <div className="z-5 relative text-white flex flex-col gap-8 items-center">
      <motion.div
        className="viaoda-libre-regular uppercase"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={transition}
      >
        <div className="flex gap-5 items-center text-[60px]">
          <h1>Step</h1>
          <img src={unionImage} alt="" className="shrink-0" />
          <h1>Into</h1>
        </div>

        <h1 className="leading-none text-[75px]">Wonder</h1>
      </motion.div>
      <motion.p
        className="imprima-regular max-w-49"
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={transition}
      >
        Designing immersive digital experiences that blur the line between
        imagination, AI, and reality.
      </motion.p>
    </div>
  );
};

const RightCards = () => {
  return (
    <motion.div
      className="absolute z-5 right-0"
      initial={{ y: -20 }}
      animate={{ y: 0 }}
      transition={transition}
    >
      <div className="imprima-regular text-white text-lg flex gap-3">
        <RightCardContainer title="Watch Demo" img={card1Image} />
        <RightCardContainer
          title="Global Partners"
          img={card3Image}
          content={"32"}
        />
        <RightCardContainer title="Watch Demo" img={card2Image} />
      </div>
      <div className="flex gap-2 mt-4 ml-7">
        <div className="rounded-2xl bg-white w-4.5 h-2" />
        <div className="rounded-2xl bg-white w-4.5 h-2 opacity-40" />
        <div className="rounded-2xl bg-white w-4.5 h-2 opacity-30" />
        <div className="rounded-2xl bg-white w-4.5 h-2 opacity-20" />
      </div>
    </motion.div>
  );
};

const RightCardContainer = ({
  title,
  img,
  content,
}: {
  title: string;
  content?: string;
  img: string;
}) => {
  return (
    <div className="w-48 h-51 rounded-[40px] overflow-hidden relative">
      <img
        src={img}
        alt=""
        className="object-cover w-full h-full absolute inset-0"
      />
      <div className="absolute blurry-gradient w-full h-19 bottom-0">
        <div className="flex items-center gap-5 h-full px-4">
          {!content ? (
            <div className="shrink-0 w-11 h-11 bg-white rounded-full flex items-center justify-center">
              <img src={watchDemoImage} alt="" className="" />
            </div>
          ) : (
            <p className="viaoda-libre-regular text-[40px]">{content}</p>
          )}

          <p className="max-w-22 leading-5">{title}</p>
        </div>
      </div>
    </div>
  );
};

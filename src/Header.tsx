import { motion, type Transition } from "motion/react";
import logoImage from "./assets/logo.png";

const transition: Transition = {
  duration: 0.4,
  delay: 0.3,
  ease: "easeIn",
};

export const Header = () => {
  return (
    <motion.div
      className="py-5 z-100 grid grid-cols-3 gap-5 items-center fixed w-full text-white imprima-regular"
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

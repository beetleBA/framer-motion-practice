import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export default function ScrollSlider() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Отслеживаем прокрутку секции
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Чем дальше скроллим вниз, тем левее карточки
  const x = useTransform(scrollYProgress, [0, 1], [0, -1000]);

  const cards = [
    { title: "Mountain", color: "bg-orange-300" },
    { title: "Ocean", color: "bg-sky-300" },
    { title: "Forest", color: "bg-green-300" },
    { title: "Desert", color: "bg-yellow-300" },
    { title: "Space", color: "bg-purple-300" },
  ];

  return (
    <section ref={containerRef} className="h-[200vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-6 px-10">
          {cards.map((card) => (
            <div
              key={card.title}
              className={`flex h-80 w-72 shrink-0 items-center justify-center rounded-3xl ${card.color}`}
            >
              <h2 className="text-3xl font-bold text-black">
                {card.title}
              </h2>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
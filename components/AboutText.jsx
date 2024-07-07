import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const items = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 2.8,
    },
  },
};

function AboutText() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const sm = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const smx = useTransform(scrollYProgress, [0, 1], [0, -400]);
  return (
    <div
      ref={container}
      style={{ y: sm }}
      className="flex justify-center relative items-center mt-20 mb-20 sm:mt-0 sm:mb-32 bg-transparent"
    >
      <div className="flex flex-col w-unit-5xl md:w-unit-9xl xl:w-unit-9xl">
        <motion.p
          variants={items}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          data-cursor-size="200px"
          data-cursor-exclusion
          data-cursor-color="#004EA3"
          id="stick-title"
          className=" text-[#fafafa] md:p-5 xl:p-5 pt-10 md:pt-20 xl:pt-36 xl:-my-10 text-2xl text-center sm:text-left md:text-5xl xl:text-6xl font-ubuntu"
        >
          Hey there, I&apos;m Aymen Ziouche
        </motion.p>
        <motion.p
          variants={items}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          data-cursor-size="200px"
          data-cursor-exclusion
          data-cursor-color="#004EA3"
          id="stick-title"
          className=" text-[#fafafa] w-unit-6xl md:w-unit-9xl md:p-5 xl:p-5 pt-5 md:pt-5 xl:pt-20 xl:-my-10 -ml-7 sm:ml-0 text-sm text-center sm:text-left md:text-lg xl:text-lg max-w-5xl font-lato"
        >
          Master of Cross-Platform Development: Fluent in Flutter. Bridging the
          gap between platforms, delivering seamless experiences across devices.
        </motion.p>
      </div>
    </div>
  );
}

export default AboutText;

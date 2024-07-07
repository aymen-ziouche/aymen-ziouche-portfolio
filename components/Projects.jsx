import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { HoverProject } from "./ui/HoverProject";

export default function Projects() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);

  const sm = useTransform(scrollYProgress, [0, 1], [0, -300]);

  return (
    <>
      <motion.div
        id="projects"
        ref={container}
        style={{ y: sm }}
        className="mt-0 sm:mt-56 pt-20 bg-[#FA939F]"
      >
        <p
          className="text-3xl sm:text-5xl text-white pt-10 mb-20 sm:pt-20 sm:-mb-36 md:mb-40 flex justify-center md:justify-center font-bold font-ubuntu text-foreground/80 mt-3"
          style={{ marginBottom: "260px" }}
        >
          Projects ✨
        </p>

        <div className="h-[60vh] sm:h-screen flex items-center justify-center">
          <div className="w-[85%] sm:w-[70%] z-[99999] mb-72">
            <HoverProject />
          </div>
        </div>
      </motion.div>
      <motion.div
        style={{ height }}
        className="relative overflow-x-clip overflow-y-visible z-[1] mt-[100px]"
      >
        <div className="h-[1750%] w-[120%] -left-[10%] -mt-96 rounded-r-[80%] rounded-l-[80%] bg-[#FA939F] -z-[1] absolute"></div>
      </motion.div>
    </>
  );
}

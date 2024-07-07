import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import { MoveRight } from "lucide-react";
import React, { useRef } from "react";

export const HoverProject = () => {
  return (
    <section className="bg-neutral-950 p-4 z-[99999] md:p-8">
      <div className="mx-auto max-w-5xl z-[99999]">
        <Link
          heading="Adoptini"
          subheading="a platform for finding and adopting pets and posting your pets for adoption"
          imgSrc="/adoptini.png"
          href="https://github.com/aymen-ziouche/adoptini-app"
        />
        <Link
          heading="Dawii Tech"
          subheading="a revolutionary healthcare application designed to streamline the process of prescription fulfillment by connecting patients directly with pharmacies."
          imgSrc="/dawiiTech.png"
          href="https://github.com/aymen-ziouche/dawiiTech-patient"
        />
        <Link
          heading="IDCardConnect"
          subheading="a Flutter application that allows you to read and extract data from electronic ID Cards using NFC."
          imgSrc="/idCardConnect.png"
          href="https://github.com/aymen-ziouche/IDCardConnect"
        />
        <Link
          heading="Sognssa"
          subheading="a mobile e-commerce application that provides a platform for purchasing products marketed towards women."
          imgSrc="/sognssa.png"
          href="https://github.com/aymen-ziouche/Sog-nssa"
        />
        <Link
          heading="Mersisse"
          subheading="Mersisse is a platform that connects buyers and sellers, enabling them to transact with one another.
          "
          imgSrc="/merssise.png"
          href="https://play.google.com/store/apps/details?id=com.zwaki.mersisse"
        />
      </div>
    </section>
  );
};

interface LinkProps {
  heading: string;
  imgSrc: string;
  subheading: string;
  href: string;
}

const Link = ({ heading, imgSrc, subheading, href }: LinkProps) => {
  const ref = useRef<HTMLAnchorElement | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

  const handleMouseMove = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    const rect = ref.current!.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.a
      href={href}
      ref={ref}
      target="_blank"
      onMouseMove={handleMouseMove}
      initial="initial"
      whileHover="whileHover"
      className="group relative flex items-center justify-between z-[99999999] font-ubuntu border-b-2 border-white transition-all ease-in-out duration-500 hover:border-[#6A43C4] md:py-8"
    >
      <div className="z-[99999]">
        <motion.span
          variants={{
            initial: { x: 0 },
            whileHover: { x: -16 },
          }}
          transition={{
            type: "spring",
            staggerChildren: 0.075,
            delayChildren: 0.25,
          }}
          className="relative z-10 block text-2xl sm:text-4xl font-bold my-2 text-white transition-all ease-in-out duration-500 group-hover:text-[#6A43C4] md:text-6xl"
        >
          {heading.split("").map((l, i) => (
            <motion.span
              variants={{
                initial: { x: 0 },
                whileHover: { x: 16 },
              }}
              transition={{ type: "spring" }}
              className="inline-block z-[99999]"
              key={i}
            >
              {l}
            </motion.span>
          ))}
        </motion.span>
        <span className="relative block mt-2 text-xs sm:text-base text-white transition-all ease-in-out group-hover:text-[#6A43C4] z-[99999]">
          {subheading}
        </span>
      </div>

      <motion.img
        style={{
          top,
          left,
          translateX: "0%",
          translateY: "-50%",
          z: 99999,
        }}
        variants={{
          initial: { scale: 0, rotate: "-12.5deg" },
          whileHover: { scale: 1, rotate: "12.5deg" },
        }}
        transition={{ type: "spring" }}
        src={imgSrc}
        className="absolute h-44 w-20 rounded-lg object-cover md:h-60 z-[99999999] md:w-28 sm:ml-20"
        alt={`Image representing a link for ${heading}`}
      />

      <motion.div
        variants={{
          initial: {
            x: "25%",
            opacity: 0,
          },
          whileHover: {
            x: "0%",
            opacity: 1,
          },
        }}
        transition={{ type: "spring" }}
        className="relative z-[99999] p-4"
      >
        <MoveRight className="text-5xl text-[#6A43C4] z-[99999]" />
      </motion.div>
    </motion.a>
  );
};

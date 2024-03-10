import { motion } from "framer-motion";
import {
  Battery,
  BatteryCharging,
  DraftingCompass,
  SproutIcon,
  Wifi,
} from "lucide-react";
import confetti from "canvas-confetti";
import { Button } from "@nextui-org/react";

const Phone = () => {
  return (
    <section className="grid place-content-center bg-neutral-900 p-12">
      <FloatingPhone />
    </section>
  );
};

const FloatingPhone = () => {
  return (
    <div
      style={{
        transformStyle: "preserve-3d",
        transform: "rotateY(-30deg) rotateX(15deg)",
      }}
      className="rounded-[24px] bg-[#FA939F]"
    >
      <motion.div
        initial={{
          transform: "translateZ(8px) translateY(-2px)",
        }}
        animate={{
          transform: "translateZ(32px) translateY(-8px)",
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 2,
          ease: "easeInOut",
        }}
        className="relative h-96 w-56 rounded-[24px] border-2 border-b-4 border-r-4 border-white border-l-neutral-200 border-t-neutral-200 bg-neutral-900 p-1 pl-[3px] pt-[3px]"
      >
        <HeaderBar />
        <Screen />
      </motion.div>
    </div>
  );
};

const HeaderBar = () => {
  return (
    <>
      <div className="absolute left-[50%] top-3 z-10 h-4 w-16 -translate-x-[50%] rounded-xl bg-black"></div>
      <div className="absolute right-3 top-2 z-10 flex gap-2">
        <Wifi />
        <BatteryCharging />
      </div>
    </>
  );
};

const Screen = () => {
  const handleConfetti = () => {
    confetti({});
  };

  return (
    <div className="relative z-0 grid h-full w-full place-content-center overflow-hidden rounded-[20px] bg-white">
      <DraftingCompass className="h-10 w-10" color="#FA939F" />

      <Button
        className="absolute bottom-4 left-4 right-4 z-10 rounded-lg border-[1px] bg-white py-2 text-sm font-medium text-[#FA939F] bg-white/90 backdrop-blur-2xl"
        onPress={handleConfetti}
      >
        Welcome
      </Button>

      <div className="absolute -left-32 -top-32 h-64 w-64 rounded-full bg-[#FA939F]" />
      <div className="absolute -bottom-72 left-[50%] h-96 w-96 -translate-x-[50%] rounded-full bg-[#FA939F]" />
    </div>
  );
};

export default Phone;

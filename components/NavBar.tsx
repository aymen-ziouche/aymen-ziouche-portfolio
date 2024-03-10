"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
import { IconHome, IconMessage, IconPhone } from "@tabler/icons-react";
import Image from "next/image";
export function NavBar() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: (
        <IconHome className="h-4 w-4 text-[#6A43C4] hover:text-[#FA939F] transition ease-in-out dark:text-white" />
      ),
    },
    {
      name: "Projects",
      link: "#projects",
      icon: (
        <IconMessage className="h-4 w-4 text-[#6A43C4] hover:text-[#FA939F] transition ease-in-out dark:text-white" />
      ),
    },
    {
      name: "Contact",
      link: "#contact",
      icon: (
        <IconPhone className="h-4 w-4 text-[#6A43C4] hover:text-[#FA939F] transition ease-in-out dark:text-white" />
      ),
    },
  ];
  return (
    <div className="relative w-full bg-[#C3BEF0]" id="home">
      <FloatingNav navItems={navItems} />
      <div className="absolute top-[50rem] left-[54rem]">
        <Image src="/sign.png" alt="Signature" height={100} width={100} />
      </div>
    </div>
  );
}
